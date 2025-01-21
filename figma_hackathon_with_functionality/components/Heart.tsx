'use client';

import React from 'react';
import { Heart as HeartIcon } from 'lucide-react';

interface HeartProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const Heart: React.FC<HeartProps> = ({ isFavorite, onToggle }) => {
  return (
    <button onClick={onToggle} className="focus:outline-none">
      <HeartIcon
        className={`${isFavorite ? 'text-red-500' : 'text-[#8fa3c1]'}`}
        fill={isFavorite ? 'red' : 'none'}
      />
    </button>
  );
};

export default Heart;
