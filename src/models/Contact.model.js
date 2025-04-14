import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email Field is required"]
    },
    phone: {
        type: Number,
        unique: true,
        required: [true, "Phone Field is required"]
    },
    message: {
        type: String,
        required: [true, "Message field is required"]
    }
}, { timestamps: true })

export const contactModal = mongoose.models.Contact || mongoose.model("Contact", contactSchema)