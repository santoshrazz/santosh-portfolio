import React from "react";
import Contact from "../../components/Contact";
const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Santosh Kumar | Contact`,
    description:
      "Contact Santosh Kumar, a full stack developer specializing in Next.js, Node.js, MongoDB, and MySQL. For project inquiries, collaborations, or technical support, use the contact form to connect directly. Stay engaged with the latest trends in full stack web development.",
    alternates: {
      canonical: "https://santoshmanav.site/contact",
    },
    openGraph: {
      title: `Santosh Kumar | Contact`,
      description:
        "Contact Santosh Kumar, a full stack developer specializing in Next.js, Node.js, MongoDB, and MySQL. For project inquiries, collaborations, or technical support, use the contact form to connect directly. Stay engaged with the latest trends in full stack web development.",
      url: "https://santoshmanav.site/contact",
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
      title: `Santosh Kumar | Contact`,
      description:
        "Contact Santosh Kumar, a full stack developer specializing in Next.js, Node.js, MongoDB, and MySQL. For project inquiries, collaborations, or technical support, use the contact form to connect directly. Stay engaged with the latest trends in full stack web development.",
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
