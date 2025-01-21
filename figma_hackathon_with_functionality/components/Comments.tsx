'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { Comment } from './interface';
import Image from 'next/image';
import { Star } from 'lucide-react';

// Function to fetch data
const getData = async (carName: string) => {
  const query = `
    *[_type == "comments" && car->name == "${carName}"]{
      _id,
      "carName": car->name,
      name,
      designation,
      comment,
      date,
      rating,
      "image": image.asset->url
    }
  `;
  const data = await client.fetch(query);
  return data;
};

export default function Comments({ carName }: { carName: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAll, setShowAll] = useState<boolean>(false); // State to control "Show All" toggle

  useEffect(() => {
    // Fetch the comments when the component is mounted
    const fetchData = async () => {
      const data = await getData(carName);
      setComments(data);
      setLoading(false);
    };

    fetchData();
  }, [carName]);

  if (loading) return <div>Loading comments...</div>;

  // Show the first 2 comments initially, and the rest when "Show All" is clicked
  const commentsToDisplay = showAll ? comments : comments.slice(0, 2);

  return (
    <div className=''>
      <h2 className='text-[28px] font-semibold mb-2'>Reviews</h2>
      <div className="space-y-4 p-4 bg-secondary dark:bg-secondary rounded-lg shadow-md">
        {commentsToDisplay.length > 0 ? (
          commentsToDisplay.map((comment) => (
            <div key={comment._id}>
                <div className='flex justify-between items-center '>
                    <div className='flex gap-3'>
                        <div className='rounded-full'>
                            <Image src={comment.image} alt='img' width={50} height={50}/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[20px] font-bold'>{comment.name}</h1>
                            <p className='text-[14px] font-medium text-muted-foreground'>{comment.designation}</p>
                        </div>
                    </div>
                        {/* Date and Star */}
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1 className='text-[14px] font-medium text-muted-foreground text-right'>{new Date(comment.date).toLocaleDateString()}</h1>
                        </div>
                        <div className='flex gap-1 justify-center items-center'>
                            <span><Star className='text-[#FBAD39]' fill='#FBAD39'  /></span>
                            <span className='text-[14px] font-semibold'>{comment.rating}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start items-center ml-11'>
                    <p className='text-[16px] font-normal text-muted-foreground '>{comment.comment}</p>
                </div>
            </div>
            
          ))
        ) : (
          <p>No comments yet for this car.</p>
        )}
      </div>

      {/* Show "Show All" button if there are more than 2 comments */}
      {comments.length > 2 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        >
          Show All
        </button>
      )}

      {/* Show "Show Less" button when all comments are shown */}
      {showAll && comments.length > 2 && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        >
          Show Less
        </button>
      )}
    </div>
  );
}
