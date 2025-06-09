import NotesPage from '@/components/notes/Notes'
import React from 'react'
import { getAllNotes } from '../api/services'

const page = async () => {
    const notesData = await getAllNotes();
    if (notesData.error) {
        return <p>No Notes Found</p>
    }
    return (
        <div>
            <NotesPage notes={notesData.data?.notes} />
        </div>
    )
}

export default page
export async function generateMetadata() {
    return {
        title: `Santosh Kumar | Notes`,
        description:
            "Download the career Effective notes of Santosh Kumar which will help you to learn anything faster and in a much effective manner. Santosh Kumar's notes will help you to learn the topic quickly",
        alternates: {
            canonical: "https://santoshmanav.site/notes",
        },
        openGraph: {
            title: `Santosh Kumar | Notes`,
            description:
                "Download the career Effective notes of Santosh Kumar which will help you to learn anything faster and in a much effective manner. Santosh Kumar's notes will help you to learn the topic quickly",
            url: "https://santoshmanav.site/notes",
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
            title: `Santosh Kumar | Notes`,
            description:
                "Download the career Effective notes of Santosh Kumar which will help you to learn anything faster and in a much effective manner. Santosh Kumar's notes will help you to learn the topic quickly",
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