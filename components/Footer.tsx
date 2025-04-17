import React from 'react';
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white shadow-sm">
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full h-[250px] gap-5 border-t-[1px] border-borderColor-100 p-5">
          <div className="flex flex-col gap-3">
            <p className="font-regular text-[16px] sm:text-[18px] md:text[20px]">
              Stay Connected
          </p>
        <Link
          href="https://www.instagram.com/ramon.mnm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
            <Image
              src={`/assets/icons/instagram.svg`}
              fill
              alt="instagram"
              className="object-cover"
            />
          </div>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61569189908839"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
            <Image
              src={`/assets/icons/facebook.svg`}
              fill
              alt="facebook"
              className="object-cover"
            />
          </div>
        </Link>
            <Link
          href="https://www.linkedin.com/in/ramonmnm100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
            <Image
              src={`/assets/icons/LI-In-Bug.png`}
              fill
              alt="linkedin"
              className="object-cover"
            />
          </div>
        </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 border-t-[1px] border-borderColor-100">
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-gray-500">© 2024 BestDeals. All rights reserved.</p>
            <p className="text-center text-gray-500">© 2024 Relent. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 