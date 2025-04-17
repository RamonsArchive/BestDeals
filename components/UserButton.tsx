"use client";
import React, { useState, useActionState } from 'react'
import { UserRound } from 'lucide-react'
import { Session } from 'next-auth';
import Image from 'next/image';
import { parseServerActionResponse } from '@/lib/utils';
import {usePathname} from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Loader from './Loader';
import {signIn, signOut} from 'next-auth/react';


const UserButton = ({session}: {session?: Session | undefined}) => {
  const user = session?.user;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = `${pathname}?${searchParams.toString()}`;


  const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);

  const hanldeUserToggle = async () => {
    setIsLoggedIn(!isLoggedIn);
    try {
        if (isLoggedIn) {
            await signOut({redirectTo: "/"});
        } else {
            await signIn('google', {redirectTo: callbackUrl});
        }

    } catch (error) {
        console.log(error);
        if (isLoggedIn) {
            return parseServerActionResponse({
                status: 'ERROR',
                error: 'Failed to sign out'
            })
        } else {
            return parseServerActionResponse({
                status: 'ERROR',
                error: 'Failed to sign in'
            })
        }
        
    }
  }

  const [state, formAction, isPending] = useActionState(hanldeUserToggle, {
    status: 'INITAL',
    error: ''
  })

  return (
    <>
        {isPending && <Loader />}
        {isLoggedIn ? 
        <form action={formAction}>
        <button type='submit'className="flex items-center justify-center p-1 rounded-full hover:bg-gray-300 active:bg-gray-300 transition-all duration-300 ease-in-out cursor-pointer">
            {user?.image ? 
            <div className="relative w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full overflow-hidden">
            <Image src={user.image} alt="user" fill /> : <UserRound className="size-5 md:size-6" />
            </div> : <p className="text-gray-500 font-medium text-[14px] md:text-[16px]">
                {user?.name?.charAt(0)}
                </p>}
        </button>
        </form>
        : <form action={formAction}>
            <button type='submit' className="flex items-center justify-center p-1 rounded-full hover:bg-gray-300 active:bg-gray-300 transition-all duration-300 ease-in-out cursor-pointer">
            <UserRound className="size-9 md:size-10 cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-500 p-1 rounded-full hover:bg-gray-200" />
        </button>
        </form>}
    </>
  )
}

export default UserButton