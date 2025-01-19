import Link from 'next/link'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className='max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6'>
        <h1 className='font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary '>Privacy & Policy</h1>
        <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>At Morent, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.</p>
        <div className='flex flex-col gap-6'>
            {/* Information We Collect */}
            <span className='space-y-3'>
                <p className='sm:text-2xl text-xl font-bold'><span className='text-primary'>1.</span> Information We Collect</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>We may collect personal information from you when you interact with our website or use our services. This information may include:</p>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Contact Information:</strong> such as your name, email address, phone number, and mailing address.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Account Information:</strong> such as your username, password, and other account details.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Payment Information:</strong> such as credit card details or other payment methods.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'><strong className='text-sm text-black dark:text-primary'>Usage Data:</strong> such as your browsing activity, IP address, device information, and cookies.</li>
            </span>
            {/* How We Use Your Information */}
            <span className='space-y-3'>
                <p className='sm:text-2xl text-xl font-bold'><span className='text-primary'>2.</span> How We Use Your Information</p>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>We may use your information for various purposes, including:</p>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Providing and improving our services.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Personalizing your experience and customizing content.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Communicating with you about your account and transactions.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Marketing and promotional purposes, with your consent.</li>
                <li className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>Analyzing usage trends and gathering demographic information.</li>
            </span>
            {/* Data Security */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>3.</span> Data Security</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>We take data security seriously and implement various measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </ol>
            {/* Your Rights and Choices */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>4.</span> Your Rights and Choices</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>You have the right to access, update, or delete your personal information. You may also opt-out of certain communications or marketing activities. Please contact us if you wish to exercise any of these rights or have any questions about how we handle your data.</p>
            </ol>
            {/* Changes to this Privacy Policy */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>5.</span> Changes to this Privacy Policy</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.</p>
            </ol>
            {/* Contact Us */}
            <ol className='space-y-3'>
                <li className='sm:text-2xl text-xl font-bold'><span className='text-primary'>6.</span> Contact Us</li>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]'>If you have any questions, concerns, or complaints about our Privacy Policy or data practices, please contact us at</p>
                <Link href='mailto:privacy@morent.com' className='text-primary text-sm font-medium'>privacy@morent.com.</Link>
            </ol>
        </div>
    </div>
  )
}
