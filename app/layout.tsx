import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roomie - Find Your Perfect Roommate",
  description: "Match with verified roommates, find housing, and build meaningful connections. Join the waitlist for early access.",
  openGraph: {
    title: "Roomie - Find Your Perfect Roommate",
    description: "Match with verified roommates, find housing, and build meaningful connections.",
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
      <body>{children}</body>
    </html>
  );
}
