const API_BASE_URL = process.env.BASE_URL
export const fetchAllBlogs = async () => {
    try {
        const response = await fetch(API_BASE_URL + "/api/blog", {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching blog" }
        }
    } catch (error) {
        return { data: null, error: "error fetching blog" }
    }
}
export const fetchSingleBlog = async ({ blogId }) => {
    try {
        const response = await fetch(API_BASE_URL + `/api/blog/${blogId}`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching single blog" }
        }
    } catch (error) {
        return { data: null, error: "error fetching single blog" }
    }
}
export const getTrendingBlog = async () => {
    try {
        const response = await fetch(API_BASE_URL + `/api/blog/latest`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching single blog" }
        }
    } catch (error) {
        return { data: null, error: "error fetching single blog" }
    }
}