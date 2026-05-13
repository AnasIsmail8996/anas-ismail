import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anas-ismail-portfolio.vercel.app"),
  title: "Anas Ismail | Full Stack MERN Developer",
  description: "Anas Ismail is a passionate Full Stack MERN Developer from Pakistan, specializing in building scalable, high-performance web applications with clean code and user-centric design.",
  keywords: [
    "Anas Ismail",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Pakistan",
  ],
  authors: [{ name: "Anas Ismail", url: "https://github.com/anas-ismail" }],
  creator: "Anas Ismail",

  openGraph: {
    type: "website",
    url: "https://anas-ismail-portfolio.vercel.app",
    title: "Anas Ismail | Full Stack MERN Developer",
    description: "Passionate Full Stack MERN Developer creating high-performance web applications.",
    images: [
      {
        url: "/images/profile/anas_ismail_pic.jfif",
        width: 800,
        height: 600,
        alt: "Anas Ismail Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@anas_ismail",
    title: "Anas Ismail | Full Stack MERN Developer",
    description: "Passionate Full Stack MERN Developer creating high-performance web applications.",
    images: ["/images/profile/anas_ismail_pic.jfif"],
  },
  icons: {
    icon: "/images/projects/icon-used.png",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-[#030014] text-white transition-colors duration-300 dark:bg-[#030014] dark:text-white light:bg-white light:text-zinc-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
