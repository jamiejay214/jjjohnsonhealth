import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JJ Johnson Health LLC | Health Insurance Brokerage",
  description:
    "JJ Johnson Health LLC is a licensed health insurance brokerage helping individuals and families find affordable, comprehensive health coverage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-gray-900 font-[family-name:var(--font-geist)]">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-emerald-700">
              JJ Johnson Health LLC
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-emerald-700 transition">
                Home
              </Link>
              <Link href="/opt-in" className="hover:text-emerald-700 transition">
                Get Updates
              </Link>
              <Link href="/privacy-policy" className="hover:text-emerald-700 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-emerald-700 transition">
                Terms
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} JJ Johnson Health LLC. All
                rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <Link href="/privacy-policy" className="hover:text-gray-900 transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-gray-900 transition">
                  Terms of Service
                </Link>
                <Link href="/opt-in" className="hover:text-gray-900 transition">
                  SMS Opt-In
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
