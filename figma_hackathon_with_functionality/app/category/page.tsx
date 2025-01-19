'use client'

import React, { useEffect, useState } from 'react';
import Popular_Cars from '../../components/interface';
import { Button } from '../../components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { RiGasStationFill } from 'react-icons/ri';
import { TbWheel } from 'react-icons/tb';
import { HiUsers } from 'react-icons/hi';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import PickDropDetail from '@/components/PickupDropOff';

async function getData() {
  const query = `
    *[_type == "car"] {
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
        "ratingCount": ratingCount
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default function Category() {
  const [data, setData] = useState<Popular_Cars[]>([]);
  const [filteredData, setFilteredData] = useState<Popular_Cars[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    carType: [] as string[],
    personCapacity: [] as string[],
    rentRange: 200, // Default max rent range
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setFilteredData(result); // Initialize filteredData with all data
    };
    fetchData();
  }, []);

  // Update filtered data whenever filters change
  useEffect(() => {
    const filtered = data.filter((car) => {
      const carTypeMatch =
        filters.carType.length === 0 || filters.carType.includes(car.carType);
      const personCapacityMatch =
        filters.personCapacity.length === 0 ||
        filters.personCapacity.includes(car.personCapacity);
      const rentMatch = car.rent <= filters.rentRange;

      return carTypeMatch && personCapacityMatch && rentMatch;
    });
    setFilteredData(filtered);
  }, [filters, data]);

  const handleCarTypeChange = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      carType: prev.carType.includes(type)
        ? prev.carType.filter((t) => t !== type) // Remove type if already selected
        : [...prev.carType, type], // Add type if not selected
    }));
  };

  const handlePersonCapacityChange = (capacity: string) => {
    setFilters((prev) => ({
      ...prev,
      personCapacity: prev.personCapacity.includes(capacity)
        ? prev.personCapacity.filter((c) => c !== capacity)
        : [...prev.personCapacity, capacity],
    }));
  };

  const handleRentChange = (value: number) => {
    setFilters((prev) => ({
      ...prev,
      rentRange: value,
    }));
  };

  return (
    <div className="w-full mx-auto pt-0 bg-background dark:bg-background ">
      {/* Toggle Button */}
      <div className="flex justify-center items-start">
        <Button
          className="p-2 bg-primary text-white rounded lg:hidden text-center z-10 "
          onClick={toggleMenu}
        >
          {isOpen ? (
            <ImCross className="text-black" />
          ) : (
            <GiHamburgerMenu className="text-black" />
          )}
        </Button>
      </div>
      <div className="flex items-start gap-2">
        {/* Left Side Filter Menu */}
        <div
          className={`px-8 lg:max-w-[768px] max-w-[640px] h-[184vh] shadow-sm lg:flex flex-col z-10 ${
            isOpen ? 'block' : 'hidden'
          } ${isOpen ? 'absolute' : 'relative'} bg-background dark:bg-background`}
        >
            {/* Car Type */}
            <div className="mx-0 mt-8">
            <h1 className="text-[12px] text-black/50 dark:text-gray-200 font-semibold">
                TYPE
            </h1>
            {['Sport', 'SUV', 'Sedan', 'Hatchback', 'Muscle'].map((type) => (
                <div className="flex justify-start items-center gap-2" key={type}>
                <label>
                    <Input
                    type="checkbox"
                    checked={filters.carType.includes(type)} // Controlled input
                    onChange={() => handleCarTypeChange(type)} // Add onChange handler
                    className="w-4 rounded-[10px] text-primary"
                    />
                </label>
                <p className="text-[20px] font-semibold">{type}</p>
                </div>
            ))}
            </div>
          {/* Capacity */}
            <div className="mx-0 mt-8">
            <h1 className="text-[12px] text-black/50 dark:text-gray-200 font-semibold">
                CAPACITY
            </h1>
            {['2 Peoples', '4 Peoples', '6 Peoples', '8 or More'].map((capacity) => (
                <div className="flex justify-start items-center gap-2" key={capacity}>
                <label>
                    <Input
                    type="checkbox"
                    checked={filters.personCapacity.includes(capacity)} // Controlled input
                    onChange={() => handlePersonCapacityChange(capacity)} // Add onChange handler
                    className="w-4 rounded"
                    />
                </label>
                <p className="text-[20px] font-semibold">{capacity}</p>
                </div>
            ))}
            </div>
          {/* Price */}
          <div className="mx-0 mt-8">
            <h1 className="text-[12px] text-black/50 dark:text-gray-200 font-semibold mb-5">
              PRICE
            </h1>
            <div className="flex justify-center items-center mb-5 ">
              <Slider
                max={200} // Max slider value
                step={10}
                value={[filters.rentRange]}
                onValueChange={(value) => handleRentChange(value[0])}
                className="text-PrimaryBlue rounded max-w-full w-[250px]"
              />
            </div>
            <p className="text-[20px] font-semibold">
              Max. ${filters.rentRange}.00
            </p>
          </div>
        </div>

        {/* Right Side Car Cards */}
        <div className="max-w-[85vw] mx-auto bg-secondary dark:bg-secondary px-4 py-2">
          {/* Pick and Drop */}
          <div className="mt-10">
            <PickDropDetail />
          </div>

          {/* Cars Cards */}
          <div
            className={`flex flex-wrap flex-auto justify-center items-center gap-x-4 gap-y-10 xl:gap-x-8 mx-auto z-0 my-12 ${
              isOpen ? 'absolute' : 'relative'
            } mb-10`}
          >
            {/* Check if filteredData is empty */}
            {filteredData.length === 0 ? 
                (
                <p className="text-center text-[18px] font-semibold text-gray-500 w-full">No cars available for the selected filters.</p>
                ) : (
            filteredData.map((car) => (
              <div
                className="flex justify-center items-center gap-8"
                key={car._id}
              >
                <div className="bg-primary-foreground dark:bg-primary-foreground w-[304px] h-[388px] rounded-[10px] relative shadow-xl shadow-gray-300 dark:shadow-xl dark:shadow-primary py-4 px-2 flex justify-center items-center">
                  <div className="space-y-8">
                    {/* Name and cart type */}
                    <div className="flex justify-between items-start gap-16">
                      <div>
                        <h1 className="text-[20px] font-bold line-clamp-1">
                          {car.name}
                        </h1>
                        <p className="text-[14px] font-bold text-ThirdColor">
                          {car.carType}
                        </p>
                      </div>
                      <div>
                        <button>
                          <Heart className="text-[#8fa3c1]" fill="red" />
                        </button>
                      </div>
                    </div>
                    {/* Car */}
                    <div className="">
                      <div>
                        <Image
                          src={car.image}
                          alt={car.name}
                          width={250}
                          height={68}
                        />
                        <span className="CarShadow"></span>
                      </div>
                    </div>
                    {/* Icons */}
                    <div className="flex justify-between items-center">
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
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[20px] font-bold">
                          ${car.rent}
                          <span className="text-[20px] font-bold">/</span>
                          <span className="text-[14px] text-[#8fa3c1]">
                            day
                          </span>
                        </p>
                        <p className="text-[14px] text-[#8fa3c1] font-bold line-through">
                          {car.previousRent ? `$ ${car.previousRent}` : null}
                        </p>
                      </div>
                      <Button className="text-[16px] font-semibold text-white bg-primary px-4 py-1 rounded h-[44px] ">
                        <Link href={`/category/cars/${car.slug}`}>Rent Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            
                ))
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
