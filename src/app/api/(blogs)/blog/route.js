import { connectToDb } from "@/db/ConnectDb";
import { blogModel } from "@/models/Blog.model";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectToDb()
    try {
        const allBlogs = await blogModel.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ message: "All Blogs Retrieved Successfully", blogs: allBlogs, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to get blogs", success: false }, { status: 400 })
    }
}
export async function POST(req) {
    await connectToDb()
    const { title, description, thumbnail, tags, category } = await req.json();
    try {
        const blogPostRespons = await blogModel.create({ title, description, thumbnail, tags, category })
        return NextResponse.json({ message: "Blog Created Successfully", blogs: blogPostRespons, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to create blogs", success: false }, { status: 400 })
    }
}