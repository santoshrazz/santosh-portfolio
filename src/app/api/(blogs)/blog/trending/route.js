import { blogModel } from "@/models/Blog.model"

export const GET = async () => {
    try {
        const trendingBlogs = await blogModel.find({}).sort({ createdAt: -1 }).limit(4)
        return NextResponse.json({ message: "Trending Blogs Retrieved Successfully", blogs: trendingBlogs, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error Retrieved Successfully", success: false }, { status: 500 })
    }
}