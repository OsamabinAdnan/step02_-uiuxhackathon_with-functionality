'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function Hero() {
    const route =useRouter()
  return (
    <div>
        <div className='w-full max-w-[1440px] mx-auto px-2'>
            <div className='py-8 '>
                <div className='flex justify-between items-center gap-2 m-0  lg:flex-row flex-col '>
                    <div className='relative lg:w-[680px] md:w-[475px] max-h-[380px] bg-primary/60 dark:bg-primary/60 p-4 rounded '>
                        <div className=' flex flex-col max-w-[284px] gap-4'>
                            <h1 className='text-white text-[32px] font-semibold'>The Best Platform for Car Rental</h1>
                            <p className='text-white text-[16px] font-medium'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                            <Button onClick={()=>route.push('/category')} className='bg-primary dark:bg-primary w-[120px] h-[44px] text-white px-5 py-2 rounded'>Rental Car</Button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src='/images/hero-car-1.webp' alt='car' width={426} height={116}/>
                        </div>
                    </div>
                    <div className='relative lg:w-[680px] md:w-[475px] max-h-[380px] bg-primary dark:bg-primary p-4 rounded md:block hidden '>
                        <div className=' flex flex-col max-w-[284px] gap-4'>
                            <h1 className='text-white text-[32px] font-semibold'>Easy way to rent a car at a low price</h1>
                            <p className='text-white text-[16px] font-medium'>Providing cheap car rental services and safe and comfortable facilities.</p>
                            <Button onClick={()=>route.push('/category')} className='bg-[#54a6ff] w-[120px] h-[44px] text-white px-5 py-2 rounded'>Rental Car</Button>
                        </div>
                        <div className='flex items-center justify-center '>
                            <Image src='/images/hero-car-2.webp' alt='car' width={365} height={116}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}