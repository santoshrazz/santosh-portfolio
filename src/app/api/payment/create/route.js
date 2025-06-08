import { NextResponse } from 'next/server';
import razorpay from 'razorpay'
import shortid from 'shortid'

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

export const POST = async (req) => {
    try {
        const { amount } = await req.json();

        if (!amount) {
            return NextResponse.json({ success: false, message: "No amount or currency provided" }, { status: 400 })
        }

        // ===> Creating order options  <======
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
            receipt: shortid.generate()
        }

        // ===> Created order  <======
        const order = await razorpayInstance.orders.create(options)

        if (!order) {
            throw new Error("some error occured while trying to create order")
        }
        return NextResponse.json({ success: true, message: "order created successfully", order }, { status: 200 })
    } catch (error) {
        console.log("error", error)
        return NextResponse.json({ success: false, message: "some error occured while trying to create order", error }, { status: 400 })
    }
}