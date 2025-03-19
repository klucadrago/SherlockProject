"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const PlayButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/instruction');
  };

  return (
    <button
      title="PLAY"
      onClick={handleClick}
      className="flex items-center justify-center bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-xl duration-100 p-4 space-x-4 transition"
    >
      <div className="sm:hidden">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-white block"
          style={{ fontSize: '2rem' }}
        />
      </div>
      <div className="hidden sm:block">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="text-white"
          style={{ fontSize: '3rem' }}
        />
      </div>
      <span className="text-sm sm:text-4xl text-lime-400 font-bold">PLAY</span>
    </button>
  );
};

export default PlayButton;