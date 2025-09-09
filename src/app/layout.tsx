// app/layout.tsx or pages/_app.tsx
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"], // specify which weights you need
  subsets: ["latin"],     // specify character sets
  variable: "--font-roboto", // optional: for CSS variables
});

export const metadata = {
  title: "PRAESTANTIA",
  description: "ELECTRONICS AND COMMUNICATION ENGINEERING",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
