import React from 'react'

export default function Partnership() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary '>Partnership</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>At Morent, we believe in the power of collaboration to drive innovation and create mutually beneficial relationships. We welcome partnership opportunities with like-minded businesses, organizations, and individuals who share our commitment to excellence and customer satisfaction.</p>
        <div className='flex flex-col gap-6'>
            {/* Why partner with us */}
            <span className='space-y-3'>
                <p className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> Why Partner with Us?</p>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Expanded Reach:</strong> Partnering with Morent provides access to our extensive customer base, allowing you to expand your brand&#039;s visibility and reach new audiences.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Strategic Alliances:</strong> Collaborate with us to form strategic alliances that leverage our collective strengths, expertise, and resources to achieve common goals and objectives.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Innovative Solutions:</strong> Join forces with Morent to develop innovative solutions and services that address evolving market needs and deliver exceptional value to our customers.</li>
            </span>
            {/* Partnership Opportunities */}
            <span className='space-y-3'>
                <p className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span>Partnership Opportunities</p>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Affiliate Programs:</strong> Partner with Morent through our affiliate programs and earn commissions by promoting our car rental services on your platform or website.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Corporate Partnerships:</strong> Explore corporate partnership opportunities with Morent to access exclusive benefits, discounts, and customized solutions tailored to your organization&apos;s needs.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Technology Integration:</strong> Integrate your technology solutions with Morent&apos;s platform to enhance our offerings and provide customers with seamless experiences.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Community Engagement:</strong> Collaborate with us on community engagement initiatives, corporate social responsibility projects, and philanthropic endeavors to make a positive impact on society.</li>
            </span>

           
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'>Get Started Today</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Are you interested in exploring partnership opportunities with Morent? We&#039;d love to hear from you! Reach out to our partnership team to discuss how we can collaborate to achieve mutual success and drive innovation in the automotive industry.</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Let&#039;s embark on a journey of partnership and mutual growth together. Contact us today to get started!</p>
            </ol>
        </div>
    </div>
  )
}
