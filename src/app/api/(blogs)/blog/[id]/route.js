import { connectToDb } from "@/db/ConnectDb";
import { blogModel } from "@/models/Blog.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = await params;
    if (!id) {
        return NextResponse.json({ message: "Blog Id required", success: false }, { status: 400 })
    }
    await connectToDb()
    try {
        // if the parameter is latest then return latest blog only
        if (id.toLowerCase() === "latest") {
            const latestBlogList = await blogModel.find({}).sort({ createdAt: -1 }).limit(4);
            return NextResponse.json({ message: "All Blogs Retrieved Successfully", blog: latestBlogList, success: true }, { status: 200 })
        }
        // if the parameter is a valid id then return that single blog.
        const singleBlog = await blogModel.findById(id);
        return NextResponse.json({ message: "All Blogs Retrieved Successfully", blog: singleBlog, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to get blogs", success: false }, { status: 400 })
    }
}