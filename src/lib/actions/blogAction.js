"use server"
export const fetchBlogData = async () => {
    try {
        const latestBlogRespons = await fetch('/api/blog')
        const latestBlogData = await latestBlogRespons.json()
        if (latestBlogData) {
            return { data: latestBlogData, error: null }
        }
        return { data: null, error: "error getting latest blog" }
    } catch (error) {
        console.log("error", error)
        return { data: null, error: "error getting latest blog" }
    }
}