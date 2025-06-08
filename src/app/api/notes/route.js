import { connectToDb } from "@/db/ConnectDb";
import { notesModal } from "@/models/Notes.modal"
import { NextResponse } from "next/server";

export const GET = async (req) => {

    try {
        await connectToDb()
        const allNotes = await notesModal.find({}).select('-downLoadLink').sort({ createdAt: -1 });
        return NextResponse.json({ success: true, message: "Notes Retrived successFully", notes: allNotes }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error Retrieving Notes" }, { status: 400 });
    }
}

export const POST = async (req) => {
    try {
        const { notesId } = await req.json()
        await connectToDb()
        if (!notesId) {
            return NextResponse.json({ success: false, message: "Notes id not found" }, { status: 400 });
        }
        const notes = await notesModal.findById(notesId)
        if (!notes) {
            return NextResponse.json({ success: false, message: "No notes is found with the given id" }, { status: 400 });
        }
        return NextResponse.json({ success: true, message: "success", notes }, { status: 200 });
    } catch (error) {
        console.log("error is ", error)
        return NextResponse.json({ success: false, message: "Error downloading notes" }, { status: 400 });
    }
}