import { fetchSingleBlog } from "@/app/api/services";
import BlogDetails from "@/components/blogs/BlogDetails";
import { formatDateToYYYYMMDD } from "@/constants";
import Head from "next/head";
import React from "react";

const page = async ({ params }) => {
  await params;
  const { id } = await params;
  const { data, error } = await fetchSingleBlog({ blogId: id });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data?.blog?.title,
    "description": data?.blog?.description,
    "image": data?.blog?.thumbnail,
    "author": {
      "@type": "Person",
      "name": "Santosh Kumar",
      "url": "https://santoshmanav.site",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Santosh Kumar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.santoshmanav.site/Profile.jpg",
      },
    },
    "datePublished": formatDateToYYYYMMDD(data?.blog.createdAt),
    "dateModified": formatDateToYYYYMMDD(data?.blog.updatedAt),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://santoshmanav.site/blog/${data?.blog?._id}`,
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div>
        <BlogDetails blog={data?.blog} />
      </div>
    </>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { data } = await fetchSingleBlog({ blogId: id });
  return {
    title: data?.blog?.title || `Santosh Kumar Blog`,
    description:
      data?.blog?.description ||
      `Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.`,
    alternates: {
      canonical: `https://santoshmanav.site/blog/${data?.blog?._id}`,
    },
    openGraph: {
      title: data?.blog?.title || `Santosh Kumar Blog`,
      description:
        data?.blog?.description ||
        `Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.`,
      url: `https://santoshmanav.site/blog/${data?.blog?._id}`,
      siteName: `Santosh Kumar`,
      images: [
        {
          url: data?.blog?.thumbnail || "https://santoshmanav.site/Profile.jpg",
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
      title: data?.blog?.title || `Santosh Raaz Blog`,
      description:
        data?.blog?.description ||
        `Read Santosh Kumar’s personal blog on full stack development, covering topics like Next.js, Node.js, MongoDB, MySQL, and modern web dev trends. Learn from tutorials, tips, and real-world coding insights shared by an experienced developer.`,
      creator: `Santosh Kumar`,
      images: [
        data?.blog?.thumbnail || "https://santoshmanav.site/Profile.jpg",
      ],
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
