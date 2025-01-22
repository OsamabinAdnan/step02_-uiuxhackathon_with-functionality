'use client';

import React, { useEffect, useState } from 'react';
import Popular_Cars from './interface';
import { client } from '@/sanity/lib/client';
import { Button } from './ui/button';
import Image from 'next/image';
import { RiGasStationFill } from 'react-icons/ri';
import { TbWheel } from 'react-icons/tb';
import { HiUsers } from 'react-icons/hi';
import Link from 'next/link';
import { Heart } from 'lucide-react';

// Fetching popular cars data
async function getData() {
  try {
    const query = `
      *[_type == "car" && tags == "popular"] {
          _id,
          name,
          "tags": tags,
          "slug": slug.current,
          "image": images[0].asset->url,
          rent,
          previousRent,
          "steering": steering,
          "personCapacity": personCapacity,
          "carType": carType,
          gasoline,
          rating,
          "ratingCount": ratingCount,
          brand,
      }
    `;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}


export default function PopularCars() {
  const [data, setData] = useState<Popular_Cars[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]); // Store car IDs in wishlist

  // Load cars data
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

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

  return (
    <div className="w-full max-w-[1440px] mx-auto py-4 px-2">
      <div className="my-2">
        {/* Heading and Button */}
        <div className="flex justify-between items-center p-2">
          <h1 className="text-[#90A3BF] text-[16px] font-semibold">Popular Cars</h1>
          <Link href={'/category'}>
            <button className="text-[16px] font-semibold text-primary">View All</button>
          </Link>
        </div>
      </div>
      {/* Cars Cards */}
      <div className="flex justify-between gap-x-4 gap-y-10 xl:gap-x-8 overflow-hidden">
        {data.map((car) => (
          <div className="flex justify-between items-center gap-8" key={car._id}>
            <div className="bg-primary-foreground dark:bg-primary-foreground w-[304px] h-[388px] rounded-[10px] relative shadow-xl shadow-gray-300 dark:shadow-xl dark:shadow-primary py-4 px-2 flex justify-center items-center">
              <div className="space-y-6">
                {/* Name and car type */}
                <div className="flex justify-between items-start gap-16">
                  <div>
                    <h1 className="text-[20px] font-bold line-clamp-1">{car.name}</h1>
                    <p className="text-[14px] font-bold text-muted-foreground">{car.brand}</p>
                    <p className="text-[14px] font-bold text-muted-foreground">{car.carType}</p>
                  </div>
                  {/* Heart Button */}
                  <div>
                    <button onClick={() => toggleWishlist(car._id)} className="focus:outline-none">
                        <Heart
                          className={`${
                            wishlist.includes(car._id)
                              ? 'text-red-500'
                              : 'text-[#8fa3c1]'
                          }`}
                          fill={wishlist.includes(car._id) ? 'red' : 'none'}
                        />
                    </button>
                  </div>
                </div>
                {/* Car Image */}
                <div>
                  <Image src={car.image} alt={car.name} width={304} height={68} priority/>
                  <span className="CarShadow"></span>
                </div>
                {/* Icons */}
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-1">
                    <RiGasStationFill color="#8fa3c1" />
                    <p className="text-[14px] font-medium text-[#8fa3c1]">{car.gasoline}</p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <TbWheel color="#8fa3c1" />
                    <p className="text-[14px] font-medium text-[#8fa3c1]">{car.steering}</p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <HiUsers color="#8fa3c1" />
                    <p className="text-[14px] font-medium text-[#8fa3c1]">{car.personCapacity}</p>
                  </div>
                </div>
                {/* Rent Details */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[20px] font-bold">
                      $ {car.rent}
                      <span className="text-[20px] font-bold">/</span>
                      <span className="text-[14px] text-[#8fa3c1]">day</span>
                    </p>
                    <p className="text-[14px] text-[#8fa3c1] font-bold line-through">
                      {car.previousRent ? `$ ${car.previousRent}` : null}
                    </p>
                  </div>
                  <Button className="text-[16px] font-semibold text-white bg-primary px-4 py-1 rounded h-[44px] ">
                    <Link href={`/categories/cars/${car.slug}`}>See Detail</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
