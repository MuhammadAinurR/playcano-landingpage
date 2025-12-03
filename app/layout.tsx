import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Playcano - Find & Join Padel Events Near You",
  description: "Connect with local padel players, create your own events, and join exciting matches in your area. The easiest way to get on the court.",
  keywords: ["padel", "sports", "events", "community", "tennis", "playcano"],
  authors: [{ name: "Playcano" }],
  openGraph: {
    title: "Playcano - Find & Join Padel Events Near You",
    description: "Connect with local padel players, create your own events, and join exciting matches in your area.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
