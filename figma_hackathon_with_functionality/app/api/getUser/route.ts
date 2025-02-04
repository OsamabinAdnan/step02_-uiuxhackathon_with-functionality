// app/api/getUser/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '../../../sanity/lib/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const clerkUserId = searchParams.get('clerkUserId');

  if (!clerkUserId) {
    return NextResponse.json(
      { error: 'Missing clerkUserId' },
      { status: 400 }
    );
  }

  try {
    // GROQ query to fetch user by Clerk ID
    const query = `*[_type == "user" && clerkUserId == $clerkUserId][0]`;
    const user = await client.fetch(query, { clerkUserId });

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Error fetching user' },
      { status: 500 }
    );
  }
}
