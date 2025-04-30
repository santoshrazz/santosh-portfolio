import Hero from "@/components/Hero"
import Technology from "@/components/Technology"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import { LatestBlogs } from "@/components/Latest_Blog"
import { getTrendingBlog } from "./api/services"
export default async function Home() {
  const { data: trendingBlogData } = await getTrendingBlog();
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Skills />
        <LatestBlogs trendingBlogData={trendingBlogData} />
        <Technology />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export async function generateMetadata() {
  return {
    title: `Santosh Kumar | Portfolio`,
    description:
      "Santosh Kumar – Full Stack Developer skilled in Next.js, Node.js, Express, MongoDB, and MySQL. Explore projects with scalable apps, clean UI/UX, and robust backend solutions. Hire a developer delivering end-to-end digital experiences.",
    alternates: {
      canonical: "https://santoshmanav.site",
    },
    openGraph: {
      title: `Santosh Kumar | Portfolio`,
      description:
        "Santosh Kumar – Full Stack Developer skilled in Next.js, Node.js, Express, MongoDB, and MySQL. Explore projects with scalable apps, clean UI/UX, and robust backend solutions. Hire a developer delivering end-to-end digital experiences.",
      url: "https://santoshmanav.site",
      siteName: "Santosh Kumar",
      images: [
        {
          url: "https://santoshmanav.site/Profile.jpg",
          width: 800,
          height: 600,
          alt: `Santosh Kumar`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Santosh Kumar | Portfolio`,
      description: "Santosh Kumar – Full Stack Developer skilled in Next.js, Node.js, Express, MongoDB, and MySQL. Explore projects with scalable apps, clean UI/UX, and robust backend solutions. Hire a developer delivering end-to-end digital experiences.",
      creator: `Santosh Kumar`,
      images: [`https://santoshmanav.site/Profile.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL("https://santoshmanav.site"),
  };
}