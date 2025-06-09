"use server"
import { cookies } from "next/headers";

const API_BASE_URL = process.env.BASE_URL
export const fetchAllBlogs = async () => {
    try {
        const response = await fetch(API_BASE_URL + "/api/blog", {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching blog" }
        }
    } catch (error) {
        return { data: null, error: "error fetching blog" }
    }
}
export const fetchSingleBlog = async ({ blogId }) => {
    try {
        const response = await fetch(API_BASE_URL + `/api/blog/${blogId}`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching single blog" }
        }
    } catch (error) {
        return { data: null, error: "error fetching single blog" }
    }
}
export const getTrendingBlog = async () => {
    try {
        const response = await fetch(API_BASE_URL + `/api/blog/latest`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching single blog" }
        }
    } catch (error) {
        return { data: null, error: "error fetching single blog" }
    }
}
export const createPaymentOrder = async ({ amount }) => {
    const dataToSend = {
        amount
    }
    try {
        const response = await fetch(API_BASE_URL + `/api/payment/create`, {
            method: "POST",
            body: JSON.stringify(dataToSend)
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error creating payment order" }
        }
    } catch (error) {
        return { data: null, error: "error creating payment order" }
    }
}
export const verifyPayment = async ({ orderId, paymentId, razorpaySignature, notesId }) => {
    const dataToSend = {
        orderId,
        paymentId,
        razorpaySignature,
        notesId
    }
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    try {
        const response = await fetch(API_BASE_URL + `/api/payment/verify`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(dataToSend)
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error verifying payment order" }
        }
    } catch (error) {
        return { data: null, error: "error verifying payment order" }
    }
}
export const getAllNotes = async () => {
    try {
        const response = await fetch(API_BASE_URL + `/api/notes`, {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json();
            return { data, error: null }
        }
        else {
            return { data: null, error: "error fetching notes" }
        }
    } catch (error) {
        return { data: null, error: "error fetching notes" }
    }
}