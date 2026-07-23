import type { NextConfig } from "next";

// Host-based routing: teamftl.online serves the Team FT. Laudy onboarding
// portal instead of the main JJ Johnson Health site. These run in
// `beforeFiles`, so they take effect before Next.js's own page routing
// (a plain vercel.json rewrite runs *after* the filesystem and never fires
// for "/").
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
        ...forHosts("/logo.png", "/team-ft-laudy-portal/logo.png"),
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
