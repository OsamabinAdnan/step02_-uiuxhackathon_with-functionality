// components/AuthCheck.tsx
'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { SanityUser } from './interface';


export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isSignedIn, user } = useUser();
  const [sanityUser, setSanityUser] = useState<SanityUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSignedIn || !user) {
      setLoading(false);
      return;
    }

    const fetchOrCreateUser = async () => {
      try {
        const res = await fetch(
          `/api/getUser?clerkUserId=${encodeURIComponent(user.id)}`
        );
        const data = await res.json();

        if (data.user) {
          setSanityUser(data.user);
        } else {
          const createRes = await fetch('/api/saveUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clerkUserId: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              name: user.fullName,
            }),
          });
          const createData = await createRes.json();

          if (createData.success) {
            setSanityUser(createData.user);
          } else {
            console.error('Failed to create user:', createData.error);
          }
        }
      } catch (error) {
        console.error('Error fetching or creating user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrCreateUser();
  }, [isSignedIn, user]);

  if (isSignedIn && loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Optionally display some info from the sanityUser */}
      <div className=' py-5 px-2 text-center'>
        {sanityUser ? (
            <h1 className='text-xl font-bold text-primary dark:text-primary'>
            Welcome, <strong>{sanityUser.name}</strong>!
            </h1>
        ):(
            <div>
                <h1 className='text-xl font-bold text-primary dark:text-primary'>
                    Hello Stranger! Sign in to book your favorite car
                </h1>
            </div>
        )}
        {children}
      </div>
    </>
  );
}
