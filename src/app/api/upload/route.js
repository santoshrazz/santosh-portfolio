import path from 'path'
import { writeFile, unlink } from 'fs/promises'
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinery';
export async function POST(request) {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    try {
        const correctPath = path.join(process.cwd(), "public/assets/" + filename)
        await writeFile(
            path.join(process.cwd(), "public/assets/" + filename),
            buffer
        );
        const imageUrl = await cloudinary.uploader.upload(correctPath, { resource_type: "auto" })
        unlink(correctPath)
        return NextResponse.json({ Message: "Success", status: 201, imageUrl: imageUrl.secure_url, success: true });
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
}