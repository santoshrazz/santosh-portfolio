import RegisterForm from "@/components/register/Register";
import React from "react";

const page = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Santosh Kumar | Register`,
    description:
      "Create your Santosh Kumar account to access exclusive full stack development tutorials, save coding resources, and stay updated on Next.js, Node.js, MongoDB, MySQL, and modern web development insights.",
    alternates: {
      canonical: "https://santoshmanav.site/register",
      url: "https://santoshmanav.site/register",
    },
    openGraph: {
      title: `Santosh Kumar | Register`,
      description:
        "Create your Santosh Kumar account to access exclusive full stack development tutorials, save coding resources, and stay updated on Next.js, Node.js, MongoDB, MySQL, and modern web development insights.",
      url: "https://santoshmanav.site/register",
      siteName: "https://santoshmanav.site/register",
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
      card: "https://santoshmanav.site/register",
      title: `Santosh Kumar | Register`,
      description:
        "Login to Santosh Kumar’s full stack development blog to access exclusive tutorials, coding tips, and insights on Next.js, Node.js, MongoDB, MySQL, and modern web technologies. Stay updated with the best practices in full stack and web development.",
      creator: `Santosh Kumar`,
      images: [`/Profile.jpg`],
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
    metadataBase: `https://santoshmanav.site/register`,
  };
}
