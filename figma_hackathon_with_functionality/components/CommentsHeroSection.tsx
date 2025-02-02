'use client';

import { client } from '@/sanity/lib/client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { HeroComment } from './interface';
import { Star } from 'lucide-react';

const getData = async () => {
  const query = `*[_type == "comments"] | order(date desc) {
    _id,
    "carName": car->name,
    name,
    designation,
    comment,
    date,
    rating,
    "image": image.asset->url
  }`;
  return await client.fetch(query);
};

export default function CommentsHeroSection() {
  const [comments, setComments] = useState<HeroComment[]>([]);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchComments = async () => {
      const data = await getData();
      setComments(data);
    };

    fetchComments();
  }, []);

  // Auto-scroll effect: trigger the "next" button click every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className='max-w-4xl mx-auto space-y-10'>
        <div>
          <h1 className='text-[28px] font-semibold mb-12 md:px-0 px-2 '>What Peoples say about us!</h1>
        </div>
        <div className="pb-10 ">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className=" "
            >
          <div className="absolute -top-10 right-12 flex gap-1 ">
            <CarouselPrevious className="bg-primary dark:bg-primary text-secondary dark:text-secondary" />
            <CarouselNext
              ref={nextButtonRef}
              className="bg-primary dark:bg-primary text-secondary dark:text-secondary"
              />
          </div>
              <div className=''>
                <CarouselContent>
                  {comments.map((comment) => (
                    <CarouselItem
                      key={comment._id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col aspect-square items-start justify-start p-6 gap-2">
                            <Image
                              src={comment.image}
                              alt={comment.name}
                              width={50}
                              height={50}
                              className="rounded-lg"
                            />
                            <div className="flex flex-col gap-2">
                              <h1 className="text-[22px] font-bold">
                                {comment.name}
                              </h1>
                              <p className="text-[14px] font-medium text-muted-foreground dark:text-muted-foreground">
                                {comment.designation}
                              </p>
                              <p className="text-[16px] font-normal  line-clamp-2">
                                {comment.comment}
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-[16px] font-medium text-primary dark:text-primary">Car used {comment.carName}
                              </p>
                              <p className="text-[16px] font-medium">
                                {new Date(comment.date).toLocaleDateString('en-US',{
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                              </p>
                              <div className='flex gap-1 justify-start items-center'>
                                <span><Star className='text-[#FBAD39]' fill='#FBAD39'/></span>
                                <span className="text-[18px] font-semibold ">{comment.rating}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </Carousel>
        </div>
      </div>
    </>
  );
}
