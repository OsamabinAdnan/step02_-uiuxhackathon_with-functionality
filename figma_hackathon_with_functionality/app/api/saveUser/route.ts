// app/api/saveUser/route.ts
import { client } from '../../../sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { clerkUserId, email, name, role } = await request.json();

    // Create a new user document in Sanity
    const user = await client.create({
      _type: 'user',
      clerkUserId,
      email,
      name,
      createdAt: new Date().toISOString(),
      role, // Include the role in the user document
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save user' },
      { status: 500 }
    );
  }
}
