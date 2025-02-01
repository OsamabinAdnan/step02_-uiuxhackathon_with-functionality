import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";


const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morent | Car Rental Service 🚗💨",
  description: "Car Rental Service",
  keywords: "Car Rental, Rent a Car, Car Hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${PlusJakartaSans.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            <Navbar />
            <main className="bg-secondary dark:bg-secondary">
              <div className="mx-auto">{children}</div>
            </main>
            
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
