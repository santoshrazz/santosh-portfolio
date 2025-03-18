import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Technology from "@/components/Technology"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import ParticleBackground from "@/components/Particle-moving"
import Skills from "@/components/Skills"
import { LatestBlogs } from "@/components/Latest_Blog"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Skills />
      <LatestBlogs />
      <Technology />
      <Projects />
      <Contact />
    </main>
  )
}

export async function generateMetadata() {
  return {
    title: `Santosh Kumar | Portfolio`,
    description:
      "Portfolio Website of Santoshrazz . software engineer in india . full stack developer in india ",
    alternates: {
      canonical: "https://github.com/santoshrazz",
      url: "https://github.com/santoshrazz",
    },
    openGraph: {
      title: `Santosh Kumar | Portfolio`,
      description:
        "Portfolio Website of Santoshrazz . software engineer in india . full stack developer in india ",
      url: "https://github.com/santoshrazz",
      siteName: "https://github.com/santoshrazz",
      images: [
        {
          url: "/Profile.jpg",
          width: 800,
          height: 600,
          alt: `Profile logo`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "https://github.com/santoshrazz",
      title: `Santosh Kumar | Portfolio`,
      description: "Play Different Type of Quiz From different Topics With different types of Mode Like Dino Mode.",
      creator: `Santosh Kumar`,
      images: [`/Profile.jpg`],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: `https://github.com/santoshrazz`,
  };
}