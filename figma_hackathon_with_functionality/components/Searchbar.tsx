'use client'

import { Search, Settings2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Searchbar() {
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if (name) {
      router.push(`/search?query=${name}`); // Pass query as a URL parameter
    }
  };

  return (
    <div className="outline-1 outline px-2 py-1 rounded-full outline-secondary dark:outline-secondary sm:w-full md:w-auto">
      <form 
        action="" 
        onSubmit={handleSearch} 
        className="flex justify-between items-center gap-2 sm:gap-4"
      >
        <button className="p-2 rounded-full bg-gray-100 dark:bg-primary">
          <Search />
        </button>
        <input 
          type="text" 
          placeholder="Search car name" 
          name="name" 
          className="px-2 py-1 rounded-full outline-none bg-secondary dark:bg-secondary w-full sm:w-auto flex-grow"
        />
        <button 
          onClick={() => router.push('/category')} 
          className="p-2 rounded-full bg-gray-100 dark:bg-primary" 
          aria-label="Toggle Filters"
        >
          <Settings2 width={24} height={24} />
        </button>
      </form>
    </div>
  );
}
