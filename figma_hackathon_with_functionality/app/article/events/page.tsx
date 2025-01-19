import React from 'react'

export default function Event() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary '>Events</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Discover exciting events and gatherings hosted by Morent and join us for unforgettable experiences and opportunities to connect with fellow car enthusiasts.</p>
        <div className='space-y-6'>
            {/* Upcoming Events */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> Upcoming Events</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Stay tuned for our upcoming events, including car showcases, test drive events, community gatherings, and more. Join us as we celebrate our passion for cars and explore the latest trends and innovations in the automotive industry.</p>
            </ol>
            {/* Past Events */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span> Past Events</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Missed out on our previous events? Don&#039;t worry! Browse through our past event highlights and relive the memorable moments shared with our community. From exclusive launches to thrilling drives, our past events showcase the excitement and camaraderie that define the Morent experience.</p>
            </ol>
            {/* Get Involved */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>3.</span> Get Involved</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Want to be part of our next event? Keep an eye on our event calendar and follow us on social media to stay updated on upcoming opportunities to get involved. Whether you&#039;re a car enthusiast, industry professional, or simply curious about the world of automobiles, there&#039;s something for everyone at Morent events.</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Join us for an unforgettable journey filled with excitement, camaraderie, and passion for all things automotive. We look forward to seeing you at our next event!</p>
            </ol>
            
        </div>
    </div>
  )
}
