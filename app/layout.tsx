import type { Metadata } from "next";
import "./globals.css";
import FloatingRSVPButton from './_components/FloatingRSVPButton'

export const metadata: Metadata = {
  title: "Glen & Millusha's Wedding",
  description: "Join us in celebrating the wedding of Glen and Millusha on December 29th, 2024. Where filter coffee meets feni, and 'I do' meets 'I brew'!",
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
