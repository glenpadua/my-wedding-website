import type { Metadata } from "next";
import "./globals.css";
import FloatingRSVPButton from './_components/FloatingRSVPButton'

export const metadata: Metadata = {
  title: "Glen & Millusha's Wedding Archive",
  description: "Glen and Millusha's wedding website for December 29th, 2024 now lives on as a happily married archive, where filter coffee met feni and the RSVP season is officially over.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <FloatingRSVPButton />
      </body>
    </html>
  )
}
