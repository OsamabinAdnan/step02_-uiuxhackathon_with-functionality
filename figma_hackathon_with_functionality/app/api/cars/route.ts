import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { SearchCar } from '@/components/interface';

// Initialize Sanity client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use your preferred API version
  useCdn: true, // `false` if you need fresh data
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || '', // Replace with your token if needed
});


// API handler for GET requests
export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search'); // Extract 'search' query parameter

  if (!search || typeof search !== 'string') {
    return NextResponse.json({ error: 'Search query is required and must be a string' }, { status: 400 });
  }

  try {
    // GROQ query for partial matching of car names
    const query = `
     *[_type == "car" && name match "${search}*"] {
  _id,
    name,
    rent,
    previousRent,
    rating,
    ratingCount,
    previousRent,
    "image":images[0].asset->url,
      steering,
    personCapacity,
    carType,
    gasoline,
    brand,
     "slug": slug.current,
}
    `;

    const cars: SearchCar[] = await sanityClient.fetch(query);

    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json({ error: 'Failed to fetch cars from Sanity' }, { status: 500 });
  }
}
