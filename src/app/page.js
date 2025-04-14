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
      "Santosh Kumar – Full Stack Developer with expertise in Next.js, Node.js, Express, MongoDB, and MySQL. View projects showcasing scalable web apps, clean UI/UX, and powerful backend solutions. Hire a developer who builds end-to-end digital experiences.",
    alternates: {
      canonical: "https://santoshmanav.site",
      url: "https://santoshmanav.site",
    },
    openGraph: {
      title: `Santosh Kumar | Portfolio`,
      description:
        "Santosh Kumar – Full Stack Developer with expertise in Next.js, Node.js, Express, MongoDB, and MySQL. View projects showcasing scalable web apps, clean UI/UX, and powerful backend solutions. Hire a developer who builds end-to-end digital experiences.",
      url: "https://santoshmanav.site",
      siteName: "https://santoshmanav.site",
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
      card: "https://santoshmanav.site",
      title: `Santosh Kumar | Portfolio`,
      description: "Santosh Kumar – Full Stack Developer with expertise in Next.js, Node.js, Express, MongoDB, and MySQL. View projects showcasing scalable web apps, clean UI/UX, and powerful backend solutions. Hire a developer who builds end-to-end digital experiences.",
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
    metadataBase: `https://santoshmanav.site`,
  };
}