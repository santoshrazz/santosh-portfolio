import mongoose, { Schema } from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Blog title is required"],
    },
    description: {
        type: String,
        required: [true, "Blog Schema is required"]
    }
})
// const blogModel = mongoose.Schema.modmongoose.model('')