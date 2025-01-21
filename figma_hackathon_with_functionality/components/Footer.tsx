'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// About Links
const Aboutlinks = [
  { href: '/article/howitsworks', name: 'How it Works' },
  { href: '/article/featured', name: 'Featured' },
  { href: '/article/partnership', name: 'Partnership' },
  { href: '/article/business-relation', name: 'Business Relation' },
]
// Community Links
const Communitylinks = [
    { href: '/article/events', name: 'Event' },
    { href: '/article/blog', name: 'Blog' },
    { href: 'https://www.youtube.com/watch?v=-1W-Vo3F1_I', name: 'Podcast' },
    { href: 'https://www.instagram.com/', name: 'Invite a Friend' },
  ]

// Social Links
const Sociallinks = [
    { href: 'https://discord.com', name: 'Discord'},
    { href: 'https://www.instagram.com/', name: 'Instagram' },
    { href: 'https://www.x.com/', name: 'Twitter(X)' },
    { href: 'https://www.facebook.com/', name: 'Facebook' },
  ]

// Privacy and terms Links
const Privacylinks = [
    { href: '/article/privacy-policy', name: 'Privacy Policy'},
    { href: '/article/terms-condition', name: 'Terms & Conditions' },
    
  ]


export default function Footer() {
    const pathname = usePathname()
  return (
    <footer className='w-full xl:px-16 lg:md-8 md:px-4 px-2 md:pt-[80px] pt-10 dark:bg-primary-foreground mx-auto'>
      <div className='flex justify-between lg:flex-row flex-col md:gap-12 gap-8 mb-9'>
            {/* Logo and Detail  */}
            <div className='flex flex-col w-[292px] gap-4'>
                <Link href='/'><h1 className='text-[32px] font-bold text-primary'>MORENT</h1></Link>
                <p className='text-[16px] font-medium text-black/60 dark:text-foreground leading-4'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            {/* Contact Info  */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-16'>
                {/* About */}
                <div className='flex flex-col gap-6'>
                    <h1 className='text-[20px] font-semibold '>About</h1>
                    <div className='flex flex-col gap-6'>
                        {Aboutlinks.map((link, index) => (
                            <div key={index}>
                                {pathname === link.href ? (
                                    <Link href={link.href} className="text-[18px] font-semibold text-primary ">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-[18px] font-medium text-gray-400 transition-all duration-100 hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                 {/* Community */}
                <div className='flex flex-col gap-6'>
                    <h1 className='text-[20px] font-semibold'>Community</h1>
                    <div className='flex flex-col gap-6'>
                        {Communitylinks.map((link, index) => (
                            <div key={index}>
                                {pathname === link.href ? (
                                    <Link href={link.href} className="text-[18px] font-semibold text-primary ">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-[18px] font-medium text-gray-400 transition-all duration-100 hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                 {/* Socials */}
                 <div className='flex flex-col gap-6'>
                    <h1 className='text-[20px] font-semibold '>Socials</h1>
                    <div className='flex flex-col gap-6'>
                        {Sociallinks.map((link, index) => (
                            <div key={index}>
                                {pathname === link.href ? (
                                    <Link href={link.href} className="text-[18px] font-semibold text-primary ">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-[18px] font-medium text-gray-400 transition-all duration-100 hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
      {/* Copyright, privacy and term condition */}
      <div className='flex justify-between md:items-center items-start pt-9 pb-9 md:flex-row flex-col-reverse lg:gap-2 gap-8 border-t' >
        <p className='text-[16px] font-semibold'>&#169;2022 MORENT. All rights reserved</p>
            <div className='flex justify-between items-center gap-[60px]'>
            {Privacylinks.map((link, index) => (
                <div key={index}>
                    {pathname === link.href ? (
                        <Link href={link.href} className="text-[16px] font-semibold text-primary ">
                            {link.name}
                        </Link>
                        ) : (
                        <Link
                            href={link.href}
                            className="text-[16px] font-semibold  transition-all duration-100 hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    )}
                </div>
                    ))}
            </div>
      </div>
        
    </footer>
  )
}