import { connectToDb } from "@/db/ConnectDb";
import { userModel } from "@/models/User.model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectToDb()
    try {
        // Getting data from response body
        const { name, email, phone, password } = await request.json();
        if (!name || !email || !phone || !password) {
            return NextResponse.json({
                message: "No required data found",
                success: false
            }, { status: 400 })
        }

        // Checking if user already exists 
        const isExists = await userModel.findOne({
            $or: [
                { email },
                { phone }
            ]
        })
        if (isExists) {
            return NextResponse.json({
                message: "User with same phone or email already exists",
                success: true,
            }, { status: 400 })
        }
        const newUser = await userModel.create({ name, email, phone, password })
        return NextResponse.json({
            message: "user created",
            success: true,
            user: newUser,
        }, { status: 201 })
    } catch (error) {
        console.log("error", error)
        return NextResponse.json({
            message: "Error while trying to register user",
            success: false
        }, { status: 500 })
    }
}