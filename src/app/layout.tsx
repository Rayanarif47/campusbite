import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CampusBite — Good Food. Better Days.",
  description:
    "Protein-focused, balanced lunches for busy university days at SZABIST Islamabad. Starting at PKR 1,000 per meal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} flex min-h-screen flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
