import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinery";
import { Readable } from "stream";

export async function POST(request) {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
        return NextResponse.json({ success: false, message: "No file received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    return new Promise((resolve) => {
        const readable = Readable.from(buffer);
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto", public_id: `assets/${filename}` },
            (error, result) => {
                if (error) {
                    console.error("Cloudinary upload error:", error);
                    resolve(
                        NextResponse.json({ success: false, message: "Upload failed" }, { status: 500 })
                    );
                } else {
                    resolve(
                        NextResponse.json(
                            { success: true, message: "Success", imageUrl: result.secure_url },
                            { status: 201 }
                        )
                    );
                }
            }
        );
        readable.pipe(stream);
    });
}
