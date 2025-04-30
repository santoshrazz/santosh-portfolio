export const dynamic = "force-dynamic";
import { fetchAllBlogs } from "@/app/api/services";
import AllBlog from "@/components/blogs/AllBlog";
import React from "react";

const page = async () => {
  const { data } = await fetchAllBlogs();
  return (
    <div>
      <AllBlog blogData={data} />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Santosh Kumar | Blog`,
    description:
      "Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.",
    alternates: {
      canonical: "https://santoshmanav.site/blog",
    },
    openGraph: {
      title: `Santosh Kumar | Blog`,
      description:
        "Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.",
      url: "https://santoshmanav.site/blog",
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
      title: `Santosh Kumar | Blog`,
      description:
        "Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.",
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
