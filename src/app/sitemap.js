import { fetchAllBlogs } from "./api/services"

export default async function sitemap() {
    const allBlogs = await fetchAllBlogs();
    const postEnteries = allBlogs?.data?.blogs?.map((post) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/blog/${post?._id}`,
        lastModified: new Date(post.updatedAt)
    }))
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_LIVE_URL}/blog`,
            lastModified: new Date(),
        },
        ...postEnteries
    ]
}