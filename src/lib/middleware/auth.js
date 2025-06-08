// lib/auth/verifyToken.js
import jwt from 'jsonwebtoken';

export function verifyTokenFromRequest(request) {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1]; // Format: Bearer <token>
    console.log("token is ", token)
    if (!token) throw new Error('Token not provided');

    const secret = process.env.AUTH_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not defined');

    const decoded = jwt.verify(token, secret);
    return decoded; // Contains user info (e.g., { id, email, ... })
}
