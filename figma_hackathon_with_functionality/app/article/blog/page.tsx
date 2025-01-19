import React from 'react'

export default function Blog() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary '>Exploring the Future of Electric Vehicles</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>In recent years, electric vehicles (EVs) have gained significant traction in the automotive industry. With advancements in battery technology, increased charging infrastructure, and growing environmental awareness, EVs are poised to revolutionize the way we drive.</p>
        <div className='space-y-6'>
            {/* The Rise of Electric Mobility */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> The Rise of Electric Mobility</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>The shift towards electric mobility is driven by various factors, including concerns about air pollution, climate change, and the finite nature of fossil fuels. Governments around the world are implementing policies to incentivize the adoption of EVs, such as tax incentives, subsidies, and stricter emissions regulations.</p>
            </ol>
            {/* Benefits of Electric Vehicles */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span> Benefits of Electric Vehicles</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>EVs offer numerous advantages over traditional internal combustion engine vehicles. They produce zero tailpipe emissions, reducing air pollution and greenhouse gas emissions. Additionally, EVs are quieter, require less maintenance, and offer lower operating costs compared to conventional vehicles.</p>
            </ol>
            {/* Overcoming Challenges */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>3.</span> Overcoming Challenges</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Despite the many benefits of EVs, there are still challenges that need to be addressed. Range anxiety, limited charging infrastructure, and higher upfront costs are some of the key obstacles hindering widespread adoption. However, ongoing advancements in battery technology and charging infrastructure are helping to overcome these challenges.</p>
            </ol>
            {/* The Future of EVs */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>4.</span>The Future of EVs</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>As technology continues to evolve, the future of electric vehicles looks promising. Manufacturers are investing heavily in research and development to improve battery efficiency, increase range, and reduce costs. With innovations such as solid-state batteries, wireless charging, and autonomous driving technology, EVs are set to become even more accessible and convenient in the years to come.</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Stay tuned to our blog for more insights and updates on the latest trends in electric mobility!</p>
            </ol>
        </div>
    </div>
  )
}
