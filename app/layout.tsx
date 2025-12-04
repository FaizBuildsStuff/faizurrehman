import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Replace Geist with Roboto Mono
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FaizurRehman — Developer & UI Designer",
  description:
    "Portfolio of FaizurRehman (crypto). Frontend engineer and UI designer crafting modern interfaces, design systems, and high-performance digital experiences.",
  
  // Optional but recommended SEO upgrades:
  keywords: [
    "FaizurRehman",
    "crypto",
    "frontend developer",
    "UI designer",
    "design systems",
    "Next.js developer",
    "React developer",
    "Pakistan developer",
    "modern UI",
    "portfolio"
  ],

  authors: [{ name: "FaizurRehman" }],

  openGraph: {
    title: "FaizurRehman — Developer & UI Designer",
    description:
      "Building modern UI systems, premium web experiences, and fast frontend workflows.",
    siteName: "FaizurRehman",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FaizurRehman — Developer & UI Designer",
    description:
      "Crafting modern UI, design systems, and premium web experiences.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
