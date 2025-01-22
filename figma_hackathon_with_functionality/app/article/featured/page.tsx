import React from 'react'

export default function Featured() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary'>Featured</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Welcome to our featured selection at Morent! We take pride in presenting a handpicked assortment of exceptional vehicles, meticulously chosen to elevate your driving experience to new heights. Each car in our featured collection embodies the epitome of style, performance, and comfort, promising an unforgettable journey every time you hit the road.</p>
        <div className='space-y-6'>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> Discover Unmatched Luxury</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Indulge in the opulence of our luxury fleet, where sophistication meets cutting-edge technology. From sleek sedans boasting state-of-the-art amenities to lavish SUVs designed for unparalleled comfort and space, our featured luxury vehicles redefine automotive elegance.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span> Unleash Thrilling Performance</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>For the adrenaline enthusiasts, our curated selection includes high-performance machines engineered to ignite your passion for driving. Experience the thrill of the open road with our sporty coupes, powerful muscle cars, and agile sports cars, each engineered to deliver exhilarating performance and dynamic handling.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>3.</span> Embrace Versatility and Comfort</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Whether embarking on a family road trip or navigating urban streets, our versatile collection of featured vehicles offers practicality without compromising on comfort. Explore spacious SUVs equipped with advanced safety features, versatile crossovers designed for urban exploration, and reliable sedans perfect for daily commuting.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>4.</span> Stay Ahead of the Curve</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>At Morent, we are committed to staying ahead of the curve, continuously updating our featured selection to showcase the latest automotive innovations. Keep an eye out for our regularly refreshed lineup, featuring the newest models, cutting-edge technologies, and innovative designs that push the boundaries of excellence.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>5.</span> Your Journey Starts Here</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Embark on your next adventure with confidence, knowing that Morent&apos;s featured collection has been curated with your driving pleasure in mind. Browse through our handpicked selection, find the perfect vehicle that matches your style and preferences, and experience the ultimate driving experience like never before.</p>
            </ol>
            <ol className='space-y-3'>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Discover the epitome of automotive excellence with Morent&#039;s featured selection today!</p>
            </ol>
        </div>
    </div>
  )
}
