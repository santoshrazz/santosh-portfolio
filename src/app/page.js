import Hero from "@/components/Hero"
import Technology from "@/components/Technology"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import { LatestBlogs } from "@/components/Latest_Blog"
export default async function Home() {

  return (
    <main className="min-h-screen bg-background text-foreground">
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
      canonical: "https://santoshmanav.site/",
      url: "https://santoshmanav.site/",
    },
    openGraph: {
      title: `Santosh Kumar | Portfolio`,
      description:
        "Portfolio Website of Santoshrazz . software engineer in india . full stack developer in india ",
      url: "https://santoshmanav.site/",
      siteName: "https://santoshmanav.site/",
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
      card: "https://santoshmanav.site/",
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
    metadataBase: `https://santoshmanav.site/`,
  };
}