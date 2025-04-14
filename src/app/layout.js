import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-provider";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/Particle-moving";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Personal portfolio website showcasing full stack development projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ParticleBackground />
          <Navbar />
          {children}
          <Toaster toastOptions={{ duration: 4000 }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
