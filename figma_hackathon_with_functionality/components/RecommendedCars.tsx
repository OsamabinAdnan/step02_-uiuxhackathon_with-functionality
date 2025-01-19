

import { client } from '@/sanity/lib/client'
import React from 'react'
import {Recommended_Cars} from './interface'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { RiGasStationFill } from "react-icons/ri";
import { TbWheel } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import Link from 'next/link'


async function getData () {
    const query = `
   *[_type == "car" && tags == "recommended"] {
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
        brand
    }
    `
    const data = await client.fetch(query)
    return data
};

export default async function RecommendedCars() {
    const data:Recommended_Cars[] = await getData()

 
  return (
    <>
        <div className='w-full max-w-[1440px] mx-auto pt-4 pb-8'>
            <div className='my-2'>
                 {/* Heading and Button */}
                <div className='flex justify-between items-center p-2'>
                    <h1 className='text-[#90A3BF] text-[16px] font-semibold'>Recommended Cars</h1>
                
                </div>
            </div>
            {/* Cars Cards */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 xl:gap-x-8 mx-auto'>
                {data.map((car)=> (
                    <div className='flex justify-center items-center gap-8' key={car._id}>
                        <div className='bg-primary-foreground dark:bg-primary-foreground w-[304px]  h-[388px]  rounded-[10px] relative shadow-xl shadow-gray-300 dark:shadow-xl dark:shadow-primary py-4 px-2 flex justify-center items-center'>
                            <div className='space-y-8'>
                                {/* Name and cart type */}
                                <div className='flex justify-between items-start gap-16'>
                                    <div>
                                        <h1 className='text-[20px] font-bold line-clamp-1'>{car.name}</h1>
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
                                        <button>
                                            <Heart className='text-[#8fa3c1]' fill='red' />
                                        </button>
                                    </div>
                                </div>
                                {/* Car */}
                                <div className=' flex items-center justify-center'>
                                    <div>
                                        <Image src={car.image} alt={car.name} width={250} height={60}/>
                                        <span className='CarShadow'></span>
                                    </div>
                                </div>
                                 {/* Icons */}
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <RiGasStationFill color='#8fa3c1'/>
                                        <p className='text-[14px] font-medium text-[#8fa3c1]'>{car.gasoline}</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-1'>
                                        <TbWheel color='#8fa3c1'/>
                                        <p className='text-[14px] font-medium text-[#8fa3c1]'>{car.steering}</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-1'>
                                        <HiUsers color='#8fa3c1'/>
                                        <p className='text-[14px] font-medium text-[#8fa3c1]'>{car.personCapacity}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-2'>
                                    <div>
                                        <p className='text-[20px] font-bold'>$ {car.rent}<span className='text-[20px] font-bold'>/</span><span className='text-[14px] text-[#8fa3c1]'>day</span></p>
                                        <p className='text-[14px] text-[#8fa3c1] font-bold line-through'>
                                             {car.previousRent ? `$ ${car.previousRent}` : null}
                                        </p>
                                    </div>
                                    <Button className='text-[16px] font-semibold text-white bg-primary px-4 py-1 rounded h-[44px] '>
                                        <Link href={`/category/cars/${car.slug}`}>Rent Now</Link>
                                    </Button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className='mt-20 mb-12 text flex items-center justify-center'>
                <Button className='text-white'><Link href='/category'>Show more Cars</Link></Button>
            </div>
            
        </div>
    </>
  )
}
