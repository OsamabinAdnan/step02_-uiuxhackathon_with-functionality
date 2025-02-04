import { NextResponse } from "next/server"; // Import Next.js response handler

// Handle POST requests to the API route
export async function POST(req: Request) {
    // Extract email and password from the request body
    const { email, password } = await req.json();

    // Check if the provided credentials match environment variables
    if (email === process.env.NEXT_PRIVATE_EMAIL_ADDRESS && password === process.env.NEXT_PRIVATE_PASSWORD) {
        return NextResponse.json({ success: true }, { status: 200 }); // Return success response
    } else {
        return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 }); // Return error response
    }
}
