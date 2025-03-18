import { NextResponse } from 'next/server';
import openai from 'openai'
export const POST = async (req) => {
    const { question } = await req.json();
    if (!question) {
        return NextResponse.json({ success: false, message: "Question is required" }, { status: 400 })
    }
    const openAiClient = new openai({ apiKey: process.env.OPENAI_API_KEY });
    try {
        const response = await openAiClient.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{
                role: "system", content: `You are a helpful chatbot representing Santosh Kumar, a passionate Full Stack Developer. Santosh specializes in building dynamic and scalable web applications using modern technologies like Next.js, Node.js, and Fastify, with MySQL and MongoDB for database management. He has experience in creating interactive front-end experiences with GSAP and Next.js while ensuring robust backend performance. He has worked on various projects, including e-commerce platforms and educational tools, enhancing user engagement and functionality. Currently, he is a Full Stack Developer at Walsis E-Connect India Pvt Ltd in Patna, Bihar. Santosh is from Bhagalpur, Bihar.For more details, visit his GitHub profile: https://github.com/santoshrazz.`
            }, { role: "user", content: question }]
        })
        return NextResponse.json({ success: true, message: response?.choices[0]?.message?.content })
    } catch (error) {
        return NextResponse.json({ success: false, message: "AI is busy now" })
    }
}
