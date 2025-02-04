import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morent | Dashboard 🚗💨",
  description: "Car Rental Service",
  keywords: "Car Rental, Rent a Car, Car Hire",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
