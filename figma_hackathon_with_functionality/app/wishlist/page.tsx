'use client';

import React, { useEffect, useState } from 'react';
import {Cars} from '../../components/interface'; // Replace with the correct path to your interface file
import { client } from '@/sanity/lib/client';
import { Button } from '../../components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RiGasStationFill } from 'react-icons/ri';
import { TbWheel } from 'react-icons/tb';
import { HiUsers } from 'react-icons/hi';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]); // Store wishlist car IDs
  const [cars, setCars] = useState<Cars[]>([]); // Store car details

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Fetch car details for the wishlist
  useEffect(() => {
    const fetchCars = async () => {
      if (wishlist.length > 0) {
        const query = `
          *[_type == "car" && _id in [${wishlist.map((id) => `"${id}"`).join(',')}]]
          {
            _id,
            name,
            tags,
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
        setCars(data);
      } else {
        setCars([]); // Clear cars if wishlist is empty
      }
    };
    fetchCars();
  }, [wishlist]);

  // Remove car from wishlist
  const removeFromWishlist = (carId: string) => {
    const updatedWishlist = wishlist.filter((id) => id !== carId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto py-4 px-4">
      <h1 className="text-[36px] font-bold text-primary my-8">My Wishlist</h1>

      {cars.length === 0 ? (
        <div className='max-w-[1440px] h-[60vh] '>
            <p className="text-[28px] text-gray-500 font-medium">Your wishlist is empty. <Link href="/category" className="text-primary">Browse Cars</Link> to add items.
            </p>
        </div>
        
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 items-center justify-center">
          {cars.map((car) => (
            <div
              className="bg-primary-foreground dark:bg-primary-foreground w-[304px] h-[388px] rounded-[10px] relative shadow-xl shadow-gray-300 py-4 px-2 flex flex-col space-y-6"
              key={car._id}
            >
              <div>
                {/* Car Name and Type */}
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-[20px] font-bold">{car.name}</h1>
                      {/* brand name */}
                      <p className="text-[14px] font-bold text-muted-foreground">
                         {car.brand}
                      </p>
                      {/* car type */}
                      <p className="text-[14px] font-bold text-muted-foreground">
                        {car.carType}
                      </p>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromWishlist(car._id)}
                      className="focus:outline-none"
                    >
                      <Heart className="text-red-500" fill="red" />
                    </button>
                  </div>
                </div>

                {/* Car Image */}
                <div className="my-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={304}
                    height={68}
                    className="rounded-lg"
                  />
                  {/* <span className="CarShadow"></span> */}
                </div>

                {/* Car Details */}
                <div className="flex justify-between items-center my-2">
                  <div className="flex justify-center items-center gap-1">
                    <RiGasStationFill color="#8fa3c1" />
                    <p className="text-[14px] font-medium text-[#8fa3c1]">
                      {car.gasoline}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <TbWheel color="#8fa3c1" />
                    <p className="text-[14px] font-medium text-[#8fa3c1]">
                      {car.steering}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <HiUsers color="#8fa3c1" />
                    <p className="text-[14px] font-medium text-[#8fa3c1]">
                      {car.personCapacity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rent Details */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    ${car.rent}
                    <span className="text-[20px] font-bold">/</span>
                    <span className="text-[14px] text-[#8fa3c1]">day</span>
                  </p>
                  <p className="text-[14px] text-[#8fa3c1] font-bold line-through">
                    {car.previousRent ? `$ ${car.previousRent}` : null}
                  </p>
                </div>
                <Button className="text-[16px] font-semibold text-white bg-primary px-4 py-1 rounded h-[44px]">
                  <Link href={`/categories/cars/${car.slug}`}>Rent Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
