import { fetchAllBlogs } from "./api/services";

export default async function sitemap() {
    const allBlogs = await fetchAllBlogs();
    const blogs = allBlogs?.data?.blogs || [];

    const postEntries = blogs.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/blog/${post?._id}`,
        lastModified: new Date(post.updatedAt),
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/register`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/notes`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/login`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/privacy`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/blog`,
            lastModified: new Date(),
        },
        ...postEntries,
    ];
}
