import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roomie | Find a Roommate You Can Trust",
  description: "Roomie helps you find verified roommates and shared housing in Nigeria. Join the waitlist for early access.",
  openGraph: {
    title: "Roomie | Find a Roommate You Can Trust",
    description: "Find verified roommates and shared housing in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
