import mongoose, { Schema } from 'mongoose'
import bcryptjs from 'bcryptjs'

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name Field is required"],
    },
    phone: {
        type: String,
        // required: [true, "Phone number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true
    },
    profilePic: {
        type: String,
        trim: true
    },
    password: {
        type: String,
    },
    providerId: {
        type: String
    }
}, {
    timestamps: true
})
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcryptjs.hash(this.password, 10)
    next()
})
userSchema.methods.comparePassword = async function (userPassword) {
    try {
        return bcryptjs.compare(userPassword, this.password)
    } catch (error) {
        throw new Error("Password comparison failed");
    }
}
export const userModel = mongoose.models.User || mongoose.model("User", userSchema)