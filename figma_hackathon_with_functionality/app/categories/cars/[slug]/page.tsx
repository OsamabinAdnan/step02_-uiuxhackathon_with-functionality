'use client';

import Comments from '@/components/Comments';
import ImageGallery from '@/components/ImageGallery';
import { CarDetailPage } from '@/components/interface';
import RecentCar from '@/components/RecentCars';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function getData(slug: string) {
    const query = `
    *[_type == "car" && slug.current == "${slug}"] [0] {
        _id,
        name,
        "tags": tags,
        "slug": slug.current,
        "images": images[].asset->url,
        rent,
        previousRent,
        "steering": steering,
        "personCapacity": personCapacity,
        "carType": carType,
        gasoline,
        rating,
        "ratingCount": ratingCount,
        brand,
        description,
    }
    `;
    const data = await client.fetch(query);
    return data;
}

// Define the type for the params
    interface Params {
    slug: string;
    }

export default function CarDetail({ params }: { params: Params }) {
    const [data, setData] = useState<CarDetailPage | null>(null);
    const [wishlist, setWishlist] = useState<string[]>([]); // Store car IDs in wishlist

    // Extract slug from params (no need for React.use() if you define the params type)
    const { slug } = params;

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await getData(slug);
            setData(fetchedData);
        }
        fetchData();
    }, [slug]);

    // Load wishlist from localStorage on component mount
    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    // Update localStorage whenever the wishlist changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Add or remove cars from the wishlist
    const toggleWishlist = (carId: string) => {
        setWishlist((prev) =>
            prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
        );
    };

    if (!data) return <div className='max-w-[1440px] mx-auto text-[28px] font-bold text-primary dark:text-primary py-10'>Loading...</div>;

    return (
        <>
            <div className="py-20 max-w-[1440px] mx-auto">
                <div className="bg-background dark:bg-background shadow-md shadow-gray-300 dark:shadow-md dark:shadow-primary lg:px-8 lg:py-8 px-4 py-4 rounded-[10px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Images */}
                        <div className="w-auto h-auto">
                            <ImageGallery images={data.images || []} />
                        </div>
                        
                        <div className=''>
                            {/* Text and heart */}
                            <div className="flex justify-between items-center">
                                <h1 className="text-[32px] font-bold">{data.name || 'Unknown Car'}</h1>
                                <button onClick={() => toggleWishlist(data._id)} className="focus:outline-none">
                                    <Heart className={`${wishlist.includes(data._id) ? 'text-red-500' : 'text-[#8fa3c1]'}`}
                                        fill={wishlist.includes(data._id) ? 'red' : 'none'} />
                                </button>
                            </div>
                            {/* Brand */}
                            <div>
                                <p className='text-[20px] text-muted-foreground dark:text-muted-foreground font-semibold'>Brand {data.brand}</p>
                            </div>
                            {/* Rating and Rating Count */}
                            <div className='flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <span><Star className='text-[#FBAD39]' fill='#FBAD39'/></span>
                                    <p className='text-[20px] text-muted-foreground font-semibold'>{data.rating}</p>
                                </div>
                                <p className='text-[20px] text-muted-foreground font-semibold'>{data.ratingCount}+ Reviews</p>
                            </div>
                            {/* Car Detail */}
                            <div className='my-5'>
                                <p className='text-[20px] text-muted-foreground'>{data.description}</p>
                            </div>
                            {/* Features */}
                            <div className='flex justify-between items-start sm:flex-row flex-col sm:items-center'>
                                <div className='space-y-2'>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='text-[20px] font-normal text-muted-foreground'>Type Car</p>
                                        <p className='text-[20px] font-semibold text-muted-foreground'>{data.carType}</p>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='text-[20px] font-normal text-muted-foreground'>Streeing</p>
                                        <p className='text-[20px] font-semibold text-muted-foreground'>{data.steering}</p>
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='text-[20px] font-normal text-muted-foreground'>Capacity</p>
                                        <p className='text-[20px] font-semibold text-muted-foreground'>{data.personCapacity}</p>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <p className='text-[20px] font-normal text-muted-foreground'>Gasonline</p>
                                        <p className='text-[20px] font-semibold text-muted-foreground'>{data.gasoline}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center mt-10'>
                                <div className='flex justify-center items-center gap-2'>
                                    <p className='text-[28px] font-bold'>${data.rent} <span className='text-[20px] font-semibold text-muted-foreground'>/day</span> </p>
                                    <p className='text-[20px] font-semibold text-muted-foreground line-through'>{data.previousRent}</p>
                                </div>
                                <Button className='bg-primary text-white px-8 py-4 rounded-md'>
                                    <Link href={`/payment/${data._id}`}>Rent Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Comments */}
                <div className=" mt-10 bg-background dark:bg-background shadow-md shadow-gray-300 dark:shadow-md dark:shadow-primary lg:px-8 lg:py-8 px-4 py-4 rounded-[10px]">
                    <Comments carName={data.name}/>
                </div>
                <div>
                    <RecentCar/>
                </div>
            </div>
        </>
    );
}
