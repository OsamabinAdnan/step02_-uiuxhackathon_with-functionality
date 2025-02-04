'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ProtectedRoute({children}:{children:React.ReactNode}) {
    const route = useRouter()

    useEffect(()=> {
            const isLoggedIn = localStorage.getItem('isLoggedIn')
            if(!isLoggedIn){
                route.push('/login')
            }
        },[route]
    )
  return (
    <>
        {children}
    </>
  )
}
