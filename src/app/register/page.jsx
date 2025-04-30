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
    },
    openGraph: {
      title: `Santosh Kumar | Register`,
      description:
        "Create your Santosh Kumar account to access exclusive full stack development tutorials, save coding resources, and stay updated on Next.js, Node.js, MongoDB, MySQL, and modern web development insights.",
      url: "https://santoshmanav.site/register",
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
      title: `Santosh Kumar | Register`,
      description:
        "Login to Santosh Kumar’s full stack development blog to access exclusive tutorials, coding tips, and insights on Next.js, Node.js, MongoDB, MySQL, and modern web technologies. Stay updated with the best practices in full stack and web development.",
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
