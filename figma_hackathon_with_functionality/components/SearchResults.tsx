// components/SearchResults.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchCar } from '@/components/interface';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { RiGasStationFill } from 'react-icons/ri';
import { TbWheel } from 'react-icons/tb';
import { HiUsers } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query'); // Get the search query from URL
  const [cars, setCars] = useState<SearchCar[]>([]); // State to hold search results
  const [wishlist, setWishlist] = useState<string[]>([]); // Store car IDs in wishlist
  const [loading, setLoading] = useState<boolean>(false); // State to track loading status

  useEffect(() => {
    if (query) {
      fetchCars(query);
    }
  }, [query]);

  const fetchCars = async (searchQuery: string) => {
    setLoading(true); // Set loading to true when fetching begins
    try {
      const response = await fetch(`/api/cars?search=${searchQuery}`); // Replace with your API endpoint
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
  };

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
    <div className="container mx-auto px-4 py-6 h-[80vh]">
      <h1 className="text-2xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-semibold text-primary dark:text-primary">Loading...</p>
        </div>
      ) : cars.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car: SearchCar) => (
            <div className="flex justify-between items-center gap-8" key={car._id}>
              <div className="bg-primary-foreground dark:bg-primary-foreground w-[304px] h-[388px] rounded-[10px] relative shadow-xl shadow-gray-300 dark:shadow-xl dark:shadow-primary py-4 px-2 flex justify-center items-center">
                <div className="space-y-5">
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
                    <Image src={car.image} alt={car.name} width={304} height={68} priority />
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
        </ul>
      ) : (
        !loading && <p>No cars found matching your search.</p>
      )}
    </div>
  );
}
