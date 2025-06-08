import { verifyTokenFromRequest } from '@/lib/middleware/auth';
import { userModel } from '@/models/User.model';
import crypto from 'crypto'
import { NextResponse } from 'next/server';
const generatedSignature = (
    razorpayOrderId,
    razorpayPaymentId
) => {
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
        throw new Error(
            'Razorpay key secret is not defined in environment variables.'
        );
    }
    const sig = crypto
        .createHmac('sha256', keySecret)
        .update(razorpayOrderId + '|' + razorpayPaymentId)
        .digest('hex');
    return sig;
};
export async function POST(request) {
    try {
        const { orderId, paymentId, razorpaySignature, notesId, userId } =
            await request.json();

        const signature = generatedSignature(orderId, paymentId);
        if (signature !== razorpaySignature) {
            return NextResponse.json(
                { message: 'payment verification failed', success: false },
                { status: 400 }
            );
        }
        const userModelUpdated = await userModel.findByIdAndUpdate(userId,
            {
                $push: { notes: notesId },
                new: true
            })
        return NextResponse.json(
            { message: 'payment verified successfully', success: true },
            { status: 200 }
        );
    }
    catch (error) {
        return NextResponse.json(
            { message: 'payment verification failed', success: false },
            { status: 400 }
        );
    }
}