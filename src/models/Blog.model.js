import mongoose, { Schema } from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Blog title is required"],
    },
    description: {
        type: String,
        required: [true, "Blog description is required"]
    },
    thumbnail: {
        type: String,
        required: [true, "Blog thumbnail is required"]
    },
    tags: {
        type: [String]
    },
    category: {
        type: String
    }
}, {
    timestamps: true
})
export const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema)