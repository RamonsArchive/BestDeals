"use client";
import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import SearchButton from './SearchButton';
import Link from 'next/link';
import {Suspense} from 'react';
import UserButton from './UserButton';
import { Session } from 'next-auth';

const Navbar = ({session}: {session?: Session | undefined}) => {

  return (
    <nav className="bg-white border-b border-b-[1px] border-gray-200 h-[4rem] px-5">
      <div className="flex flex-row justify-between items-center w-full h-full">
        <Link href="/">
        <div className='relative w-[60px] h-[45px] md:w-[75px] md:h-[55px]'>
        <Image src="/logo/logoTwo.svg" alt="logo" fill className='object-cover' />
        </div>
        </Link>
        <div className="flex flex-row gap-3 sm:gap-4 lg:gap-5 justify-end items-center w-full h-full">
          <SearchButton />
          <Heart className="size-9 md:size-10 cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-500 p-1 rounded-full hover:bg-gray-300 active:bg-gray-300" />
          <Suspense fallback={<div>Loading...</div>}>
          <UserButton session={session || undefined}/>
          </Suspense>
        </div>
      </div>
    </nav>
  );
} 

export default Navbar;