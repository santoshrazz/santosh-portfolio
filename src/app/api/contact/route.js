import { connectToDb } from "@/db/ConnectDb";
import { contactModal } from "@/models/Contact.model";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    await connectToDb()
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !phone || !message) {
        return NextResponse.json({ success: false, message: "No required information provided" }, { status: 400 })
    }
    try {
        const isExistingRequest = await contactModal.findOne({
            $or: [
                { email },
                { phone }
            ]
        })
        if (isExistingRequest) {
            return NextResponse.json({ success: false, message: "Your request is already submitted" }, { status: 400 })
        }
        const newContact = await contactModal.create({ name, email, phone, message })
        return NextResponse.json({ success: true, message: "Your request submitted successfully", data: newContact }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ success: false, message: "error while trying to save request" }, { status: 500 })
    }
}