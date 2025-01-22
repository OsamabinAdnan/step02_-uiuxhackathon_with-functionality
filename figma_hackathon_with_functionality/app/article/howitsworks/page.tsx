import React from 'react'

export default function HowitsWorks() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary '>How Morent works</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>At Morent, we strive to provide you with a seamless and reliable car rental experience. Here&#039;s a breakdown of how our service operates:</p>
        <div className='space-y-6'>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> Car Registration</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Before a car becomes available for rental, it undergoes a thorough registration process. Owners interested in listing their vehicles on our platform register through our specialized service. We collect essential details about the vehicle, including its make, model, year, and current condition.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span> Quality Checks</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Ensuring your safety is our top priority. Hence, each registered car undergoes rigorous quality checks. Our trained technicians meticulously inspect every aspect of the vehicle to verify its roadworthiness. We examine engine performance, brake systems, tires, lights, and other crucial components to guarantee that the car meets our standards.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>3.</span> Insurance Provision</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Once a car successfully passes the quality checks, we provide comprehensive insurance coverage. This insurance protects both the owner and the renter against unforeseen accidents or damages during the rental period. We believe in offering peace of mind to both parties involved in the rental transaction.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>4.</span> Availability for Rental</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>After completing the registration, quality checks, and insurance formalities, the car becomes available for rental. Renters can browse through our diverse selection of vehicles and choose the one that best suits their needs. With a wide range of options available, ranging from compact cars to spacious SUVs, we ensure that there&apos;s something for everyone.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>5.</span> Advanced Technology Integration</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>To enhance your rental experience, each car on our platform is equipped with advanced technology features. These include GPS trackers for real-time location monitoring, sensors for monitoring vehicle health and performance, and additional safety features for your peace of mind on the road.</p>
            </ol>
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'>Conclusion</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>At Morent, our streamlined process ensures that you receive a reliable and hassle-free car rental experience. From thorough quality checks to advanced technology integration, we leave no stone unturned in providing you with the best possible service. Trust us for your next adventure on the road!</p>
            </ol>
        </div>
    </div>
  )
}
