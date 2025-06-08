import mongoose, { Schema } from 'mongoose'

const notesSchema = new Schema({
    title: {
        type: String,
        required: [true, "Notes title is required"],
    },
    description: {
        type: String,
        required: [true, "Notes description is required"]
    },
    price: {
        type: String,
        required: [true, "Notes price is required"]
    },
    tags: {
        type: [String]
    },
    thumbnail: {
        type: String,
        required: [true, "Notes thumbnail is required"]
    },
    downLoadLink: {
        type: String,
        required: [true, "Notes thumbnail is required"]
    },
    downloadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})
export const notesModal = mongoose.models.Notes || mongoose.model("Notes", notesSchema)