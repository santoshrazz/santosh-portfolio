import Privacy from '@/components/privacy/Privacy'
import React from 'react'

const page = () => {
    return (
        <div>
            <Privacy />
        </div>
    )
}

export default page


export async function generateMetadata() {
    return {
        title: `Santosh Kumar | Privacy`,
        description:
            "Read Santosh Kumar’s Privacy Policy to understand how we collect, use, and protect your data. Committed to transparency and security for all users exploring full stack development tutorials, tips, and web dev content.",
        alternates: {
            canonical: "https://santoshmanav.site/privacy",
            url: "https://santoshmanav.site/privacy",
        },
        openGraph: {
            title: `Santosh Kumar | Privacy`,
            description:
                "Read Santosh Kumar’s Privacy Policy to understand how we collect, use, and protect your data. Committed to transparency and security for all users exploring full stack development tutorials, tips, and web dev content.",
            url: "https://santoshmanav.site/privacy",
            siteName: "https://santoshmanav.site/privacy",
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
            card: "https://santoshmanav.site/privacy",
            title: `Santosh Kumar | Privacy`,
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
        metadataBase: `https://santoshmanav.site/privacy`,
    };
}