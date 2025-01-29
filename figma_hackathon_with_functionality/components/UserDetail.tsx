'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'

export default function UserDetail() {
    const  {user} = useUser();
    console.log(user?.firstName, user?.lastName);
  return (
    <div className='flex justify-center items-center py-5 px-2 text-center'>
        {user ? (
                <h1 className='text-xl font-bold text-primary dark:text-primary'>
                    Welcome! {user.firstName} {user.lastName}
                </h1>
            ) : (
                <div>
                    <h1 className='text-xl font-bold text-primary dark:text-primary'>
                        Hello Stranger! Sign in to book your favorite car
                    </h1>
                </div>
            )}
    </div>
  )
}
