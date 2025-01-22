'use client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageGalleryProps {
    images:string[]
}

export default function ImageGallery({images}:ImageGalleryProps) {
    const [bigImage, setBigImage] = useState(images[0])
    const handleSmallImageClick = (image:string) => {
        setBigImage(image)
    }
  return (
    <div className='flex flex-col gap-6 justify-center items-start '>
        <div className='order-last flex gap-4 lg:order-none lg:flex-row justify-center items-center'>
            {images.map((image:string, idx:number)=>(
                <div key={idx} className=' overflow-hidden rounded-lg bg-gray-100'>
                    <Image src={urlFor(image).url()} alt='image' width={200} height={200} className='' onClick={()=>handleSmallImageClick(image)} priority/>
                </div>
            ))}
        </div>
        <div className='relative overflow-hidden rounded-lg  lg:col-span-4'>
            <Image src={urlFor(bigImage).url()} alt='image' width={800} height={800} className='' priority/>
        </div>
        
       
    </div>
  )
}