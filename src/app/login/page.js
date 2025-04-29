import Login from '@/components/login/Login'
import React from 'react'

const page = () => {
    return (
        <div className='mt-10'>
            <Login />
        </div>
    )
}

export default page

export async function generateMetadata() {
    return {
        title: `Santosh Kumar | Login`,
        description:
            "Access your Santosh Kumar account securely through our login portal. Manage your full stack development journey, track tutorials, save coding tips, and stay updated with the latest in Next.js, Node.js, MongoDB, and web development trends.",
        alternates: {
            canonical: "https://santoshmanav.site/login",
            url: "https://santoshmanav.site/login",
        },
        openGraph: {
            title: `Santosh Kumar | Login`,
            description:
                "Access your Santosh Kumar account securely through our login portal. Manage your full stack development journey, track tutorials, save coding tips, and stay updated with the latest in Next.js, Node.js, MongoDB, and web development trends.",
            url: "https://santoshmanav.site/login",
            siteName: "https://santoshmanav.site/login",
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
            card: "https://santoshmanav.site/login",
            title: `Santosh Kumar | Login`,
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
        metadataBase: `https://santoshmanav.site/login`,
    };
}