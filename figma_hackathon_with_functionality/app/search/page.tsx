'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import SearchResults and disable SSR (for client-side rendering only)
const SearchResults = dynamic(() => import('@/components/SearchResults'), {
  ssr: false, // Disable SSR for this component
});

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchResults />
    </Suspense>
  );
}
