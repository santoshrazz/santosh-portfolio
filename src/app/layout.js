import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-provider";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/Particle-moving";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";
import Head from "next/head";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Full Stack Developer | Software Engineer",
  description: "Personal portfolio website showcasing full stack development projects and skills",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Santosh Kumar",
                  "url": "https://santoshmanav.site",
                  "image": "https://www.santoshmanav.site/Profile.jpg",
                  "sameAs": [
                    "https://www.linkedin.com/in/santoshrazz",
                    "https://github.com/santoshrazz"
                  ],
                  "jobTitle": "Full Stack Developer"
                }
              ` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "url": "https://santoshmanav.site",
                  "name": "Santosh Kumar | Portfolio"
                }
              ` }} />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AuthWrapper>
            <ParticleBackground />
            <Navbar />
            {children}
            <Toaster toastOptions={{ duration: 4000 }} />
            <Footer />
          </AuthWrapper>
        </ThemeProvider>
      </body>
    </html >
  );
}
