import Link from 'next/link'
import React from 'react'

export default function TermCondition() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary '>Terms and Conditions</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Welcome to Morent! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>By accessing this website or using our services, you accept these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our website or services.</p>
        <div className='flex flex-col gap-6'>
            {/* Intellectual Property Rights */}
            <span className='space-y-3'>
                <p className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> Intellectual Property Rights</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Unless otherwise stated, Morent and/or its licensors own the intellectual property rights for all material on our website and services. All intellectual property rights are reserved.</p>
            </span>
            {/* Restrictions */}
            <span className='space-y-3'>
                <p className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span> Restrictions</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>You are specifically restricted from:</p>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Publishing any website material in any other media.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Selling, sublicensing, or otherwise commercializing any website material.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Using this website or services in any way that is or may be damaging to the website or services.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Using this website or services in any way that impacts user access to the website or services.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Engaging in any data mining, harvesting, or other similar activity.</li>
            </span>
            {/* No Warranties */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>3.</span> No Warranties</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>This website and services are provided as is, with all faults, and Morent makes no representations or warranties of any kind related to our website or services.</p>
            </ol>
            {/* Limitation of Liability */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>4.</span> Limitation of Liability</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>In no event shall Morent, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website or services.</p>
            </ol>
            {/* Severability */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>5.</span> Severability</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>If any provision of these Terms and Conditions is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
            </ol>
            {/* Variation of Terms */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>6.</span> Variation of Terms</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Morent is permitted to revise these Terms and Conditions at any time as it sees fit, and by using this website or services, you are expected to review these Terms and Conditions regularly.</p>
            </ol>
            {/* Governing Law */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>7.</span> Governing Law</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>These Terms and Conditions will be governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Jurisdiction] for the resolution of any disputes.</p>
            </ol>
            {/* Contact Us */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>8.</span> Contact Us</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>If you have any questions or concerns about these Terms and Conditions, please contact us at</p>
                <Link href='mailto:terms@morent.com.' className='text-primary text-sm font-medium'>terms@morent.com.</Link>
            </ol>
        </div>
    </div>
  )
}
