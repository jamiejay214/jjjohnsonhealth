import type { NextConfig } from "next";

// Host-based routing: teamftl.online serves the Team FT. Laudy onboarding
// portal instead of the main JJ Johnson Health site. These run in
// `beforeFiles`, so they take effect before Next.js's own page routing
// (a plain vercel.json rewrite runs *after* the filesystem and never fires
// for "/").
//
// Only "/" and "/admin" are rewritten here. Every asset the portal HTML
// loads (logo, PDFs, etc.) must use an absolute path like
// "/team-ft-laudy-portal/whatever.ext" rather than a bare relative path —
// the browser resolves relative URLs against the visible address ("/"),
// not the internal rewrite destination, so a relative "foo.pdf" 404s here
// even though the real file exists at /team-ft-laudy-portal/foo.pdf.
const TEAMFTL_HOSTS = ["teamftl.online", "www.teamftl.online"];

const nextConfig: NextConfig = {
  async rewrites() {
    const forHosts = (source: string, destination: string) =>
      TEAMFTL_HOSTS.map((value) => ({
        source,
        has: [{ type: "host" as const, value }],
        destination,
      }));

    return {
      beforeFiles: [
        ...forHosts("/", "/team-ft-laudy-portal/index.html"),
        ...forHosts("/admin", "/team-ft-laudy-portal/admin.html"),
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  // Always revalidate the portal + admin pages so agents and the admin get the
  // latest version immediately instead of a stale browser/CDN cache.
  async headers() {
    const noCache = [
      { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
    ];
    const onHosts = (source: string) =>
      TEAMFTL_HOSTS.map((value) => ({
        source,
        has: [{ type: "host" as const, value }],
        headers: noCache,
      }));
    return [
      { source: "/team-ft-laudy-portal/:path*", headers: noCache },
      ...onHosts("/"),
      ...onHosts("/admin"),
    ];
  },
};

export default nextConfig;
