import { fetchSingleBlog } from "@/app/api/services";
import BlogDetails from "@/components/blogs/BlogDetails";
import React from "react";

const page = async ({ params }) => {
  await params;
  const { id } = await params;
  const { data, error } = await fetchSingleBlog({ blogId: id });
  return (
    <div>
      <BlogDetails blog={data.blog} />
    </div>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { data } = await fetchSingleBlog({ blogId: id });
  return {
    title: data?.blog?.title || `Santosh Raaz Blog`,
    description:
      data?.blog?.description ||
      `Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.`,
    alternates: {
      canonical: "https://santoshmanav.site",
      url: "https://santoshmanav.site",
    },
    openGraph: {
      title: data?.blog?.title || `Santosh Raaz Blog`,
      description:
        data?.blog?.description ||
        `Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.`,
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
      title: data?.blog?.title || `Santosh Raaz Blog`,
      description:
        data?.blog?.description ||
        `Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.`,
      creator: `Santosh Kumar`,
      images: [data?.blog?.thumbnail],
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
