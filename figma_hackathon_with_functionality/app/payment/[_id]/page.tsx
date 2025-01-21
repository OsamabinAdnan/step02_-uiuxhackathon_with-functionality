import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import {PaymentPage} from '../../../components/interface'
import { client } from "@/sanity/lib/client";

async function getData(_id:string){
    const query = `
    *[_type == "car" && _id == "${_id}"] [0] {
    _id,
    name,
    rent,
    rating,
    ratingCount,
    previousRent,
    "image":images[0].asset->url
    }
    `
    const data = await client.fetch(query);
    return data;
}

export default async function Payment({params}:{params:Promise<{_id:string}>}) {
    const resolvedParams = await params
    const {_id} =resolvedParams
    const data:PaymentPage = await getData(_id);
  return (
    <div className=" max-w-[1440px] mx-auto ">
        {/* Whole */}
        <div className="py-10 lg:px-4 px-2 flex justify-center lg:items-start items-center lg:gap-8 gap-4 lg:flex-row flex-col-reverse">
            {/* Left */}
            <div className="max-w-full lg:max-w-[852px] h-auto  ">
            {/* Billing Info */}
            <div className="bg-background dark:bg-background lg:p-4 p-3 rounded">
                <h1 className="text-[20px] font-bold">Billing Info</h1>
                <div className="flex justify-between items-center">
                <p className=" text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    Please enter your billing info
                </p>
                <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    Step 1 of 4
                </p>
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <label className="text-[16px] font-semibold w-full md:w-[48%]">
                    Name
                    <Input
                    type="text"
                    placeholder="Your Name"
                    className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-sm font-medium rounded w-full h-12"
                    />
                </label>
                <label className="text-[16px] font-semibold w-full md:w-[48%]">
                    Phone Number
                    <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-sm font-medium rounded w-full h-12"
                    />
                </label>
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <label className="text-[16px] font-semibold w-full md:w-[48%]">
                    Address
                    <Input
                    type="text"
                    placeholder="Address"
                    className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-sm font-medium rounded w-full h-12"
                    />
                </label>
                <label className="text-[16px] font-semibold w-full md:w-[48%]">
                    Town/ City
                    <Input
                    type="text"
                    placeholder="Town or City"
                    className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-sm font-medium rounded w-full h-12"
                    />
                </label>
                </div>
            </div>
            {/* Rental Info */}
            <div className="bg-background dark:bg-background lg:p-4 p-3 mt-10 rounded">
                <h1 className="text-[20px] font-bold">Rental Info</h1>
                <div className="flex justify-between items-center">
                    <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    Please select your rental date
                    </p>
                    <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    Step 2 of 4
                    </p>
                </div>

                {/* Pick-Up Section */}
                <div className="mt-6">
                    <div className="flex items-center gap-2 py-5">
                    <p className="text-[16px] font-semibold">Pick-Up</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <label className="text-[16px] font-semibold w-full md:w-[48%] relative">
                        Location
                        <Input
                        type="text"
                        placeholder="Select your city"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-[14px] font-medium rounded w-full h-12"
                        />
                        <ChevronDown className="absolute top-8 right-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    </label>
                    <label className="text-[16px] font-semibold w-full md:w-[48%] relative">
                        Date
                        <Input
                        type="text"
                        placeholder="Select your date"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-[14px] font-medium rounded w-full h-12"
                        />
                        <ChevronDown className="absolute top-8 right-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    </label>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <label className="text-[16px] font-semibold w-full md:w-[48%] relative">
                        Time
                        <Input
                        type="text"
                        placeholder="Select your time"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-[14px] font-medium rounded w-full h-12"
                        />
                        <ChevronDown className="absolute top-8 right-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    </label>
                    </div>
                </div>

                {/* Drop-Off Section */}
                <div className="mt-8">
                    <div className="flex items-center gap-2 py-5">
                    <p className="text-[16px] font-semibold">Drop-Off</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <label className="text-[16px] font-semibold w-full md:w-[48%] relative">
                        Location
                        <Input
                        type="text"
                        placeholder="Select your city"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-[14px] font-medium rounded w-full h-12"
                        />
                        <ChevronDown className="absolute top-8 right-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    </label>
                    <label className="text-[16px] font-semibold w-full md:w-[48%] relative">
                        Date
                        <Input
                        type="text"
                        placeholder="Select your date"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-[14px] font-medium rounded w-full h-12"
                        />
                        <ChevronDown className="absolute top-8 right-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    </label>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <label className="text-[16px] font-semibold w-full md:w-[48%] relative">
                        Time
                        <Input
                        type="text"
                        placeholder="Select your time"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-[14px] font-medium rounded w-full h-12"
                        />
                        <ChevronDown className="absolute top-8 right-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    </label>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="bg-background dark:bg-background lg:p-4 p-3 rounded mt-10">
            <h1 className="text-[20px] font-bold">Payment Method</h1>
            <div className="flex justify-between items-center mt-2">
                <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                Please enter your payment method
                </p>
                <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                Step 3 of 4
                </p>
            </div>

            <div className="bg-secondaryBgGray rounded py-4 mt-4">
                <div className="flex justify-between items-center gap-4 ">
                    <div className="flex items-center gap-2">
                        <p className="text-[16px] font-semibold">Credit Card</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/visa.png" alt="Visa Logo" width={48} height={16} />
                        <Image src="/images/mc.png" alt="MasterCard Logo" width={32} height={20} />
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4">
                    <label className="text-[16px] font-semibold w-full md:w-auto">
                        Card Number
                        <Input
                        type="text"
                        placeholder="Card Number"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-muted-foreground dark:text-muted-foreground text-sm font-medium rounded w-full md:w-80 h-14"
                        />
                    </label>
                    <label className="text-[16px] font-semibold w-full md:w-auto">
                        Expiration Date
                        <Input
                        type="tel"
                        placeholder="DD/MM/YY"
                        className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-muted-foreground dark:text-muted-foreground text-sm font-medium rounded w-full md:w-80 h-14"
                        />
                    </label>
                </div>

                <div className="mt-4 flex flex-wrap gap-4">
                <label className="text-[16px] font-semibold w-full md:w-auto">
                    Card Holder
                    <Input
                    type="text"
                    placeholder="Card Holder"
                    className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-muted-foreground dark:text-muted-foreground text-sm font-medium rounded w-full md:w-80 h-14"
                    />
                </label>
                <label className="text-[16px] font-semibold w-full md:w-auto">
                    CVC
                    <Input
                    type="tel"
                    placeholder="CVC"
                    className="border-none pl-2 bg-primary-foreground dark:bg-primary-foreground text-muted-foreground dark:text-muted-foreground text-sm font-medium rounded w-full md:w-80 h-14"
                    />
                </label>
                </div>
            </div>
            </div>


            {/* Confirmation */}
            <div className="bg-background dark:bg-background lg:p-4 p-3 mt-10 rounded ">
                <h1 className="text-[20px] font-bold">Conformation</h1>
                <div className="flex justify-between items-center">
                <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    We are getting to the end. Just few clicks and your rental is
                    ready!
                </p>
                <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    Step 4 of 4
                </p>
                </div>

                {/* agree 1 */}
                <div className="mt-4 flex justify-between items-center md:flex-row flex-col rounded bg-SecondaryBgGray p-4 ">
                <div className="flex justify-center items-center gap-2">
                    <Checkbox className="rounded w-[20px] h-[20px]" />
                    <span className="text-[16px] font-semibold ">
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                    </span>
                </div>
                </div>

                {/* agree 2 */}
                <div className="mt-0 flex justify-between items-center md:flex-row flex-col rounded bg-SecondaryBgGray p-4 ">
                <div className="flex justify-center items-center gap-2">
                    <Checkbox className="rounded w-[20px] h-[20px]" />
                    <span className="text-[16px] font-semibold ">
                    I agree with our terms and conditions and privacy policy.
                    </span>
                </div>
                </div>
                <div className="mt-4">
                <Button className="bg-primary dark:bg-primary text-[16px] font-bold rounded px-4">
                    Sent Now
                </Button>
                </div>
                {/* Icons and last statement */}
                <div className="my-4 ">
                <Image
                    src="/images/safety.png"
                    alt="img"
                    width={44}
                    height={44}
                    className="mb-2"
                />
                <h1 className="text-[16px] font-semibold mb-2">
                    All your data are safe
                </h1>
                <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                    We are using the most advanced security to provide you the best
                    experience ever.
                </p>
                </div>
            </div>
            </div>
            {/* Right */}
            <div className='max-w-[492px] h-auto rounded '>
                <div className="bg-background dark:bg-background p-4 rounded">
                    {/* Rental Summary */}
                    <div>
                        <h1 className='text-[20px] font-bold'>Rental Summary</h1>
                        <p className='text-[14px] font-medium text-muted-foreground dark:text-muted-foreground'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>
                    {/* Image, Name rating and count */}
                    <div className='flex justify-center items-center gap-2 my-4'>
                        <div>
                            <Image src={data.image} alt={data.name} width={200} height={200}/>
                        </div>
                        <div className="">
                            <h1 className='lg:text-[32px] text-[20px] font-bold'>{data.name}</h1>
                            <div className='flex justify-start items-center gap-1 lg:flex-row flex-col'>
                                <span className='flex justify-center items-center'>
                                    <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                </span>
                                <span className='text-[14px] font-medium text-muted-foreground'>{data.ratingCount}+ Reviews</span>    
                            </div>
                        </div>                        
                    </div>
                    {/* Subtotal and Tax */}
                    <div className=' border-t-2 border-black/10 '>
                        <div className='flex justify-between mt-4 items-center'>
                            <p className='text-[12px] font-semibold text-muted-foreground dark:text-muted-foreground'>Subtotal</p>
                            <p className='text-[16px] font-semibold'>$ {data.rent}.00</p>
                        </div>
                        <div className='flex justify-between  items-center'>
                            <p className='text-[12px] font-semibold text-muted-foreground dark:text-muted-foreground'>Tax</p>
                            <p className='text-[16px] font-semibold'>$0</p>
                        </div>
                    </div>
                    {/* Coupon code and Button */}
                    <div className='flex items-center justify-center gap-2 my-4'>
                        <Input type='text' className='border-none bg-primary-foreground dark:bg-primary-foreground pl-2 rounded text-[#90A3BF] text-[14px] font-medium' placeholder='Apply Promo Code'/>
                        <Button className=' rounded px-2 py-2 text-[12px] font-semibold'>Apply now</Button>
                    </div>
                    {/* Total Rental Price */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='lg:text-[20px] text-[16px] font-bold'>Total Rental Price per Day</h1>
                            <p className='text-muted-foreground dark:text-muted-foreground text-[14px] font-medium'>Overall price and includes rental discount</p>
                        </div>
                        <h1 className='lg:text-[32px] text-[24px] font-bold'>${data.rent}.00</h1>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}
