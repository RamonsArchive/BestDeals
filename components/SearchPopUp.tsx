"use client";
import React from 'react'
import {useRef, useEffect, useState, useActionState} from 'react'
import {X, Search} from 'lucide-react'
import Image from 'next/image'
import Form from "next/form";
import Link from "next/link";
import Loader from './Loader';
import { toast } from 'sonner';
import { parseServerActionResponse } from '@/lib/utils';
import { ActionState } from '@/lib/globalTypes';
import  {useContext } from 'react';
import { FilterContext} from './FilterContext';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

const SearchPopUp = ({session, isOpen, setIsOpen}: {session: Session | undefined, isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {resetFilters} = useContext(FilterContext);
  const router = useRouter();

  const [query, setQuery] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    if (mainRef.current && !mainRef.current.contains(e.target as Node)) {
        setIsOpen(false);
    }
  }
  useEffect(() => {
    if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])


  const handleFormSubmit = async (state: { status: string; error: string; }, formData: FormData): Promise<{ status: string; error: string; }> => {
    try {
        const query = formData.get('query');
        console.log(query);
        if (!query) {
            return {
                status: "ERROR",
                error: "No query provided"
            }
        }
        const userId = session?.user?.id;
        resetFilters();
        router.push(`/search?query=${encodeURIComponent(query as string).toLowerCase()}`)
        if (userId) {
            // write recent search history
        }
        // revalidate recent searches
        setQuery('');
        setIsOpen(false);
        toast.success("SUCCESS", {
            description: "Search successful",
        });
        return {
            status: "SUCCESS",
            error: ""
        }
    } catch (error) {
        console.error(error);
        toast.error("ERROR", {
            description: "Failed to search",
        });
        return {
            status: "ERROR",
            error: "Failed to search"
        }
    }
  }
  
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    status: "INITIAL",
    error: ''
  })

  return (
    <>
    {isPending && <Loader />}
    <div ref={mainRef} className={`fixed top-0 left-0 z-[50] h-full sm:h-[80%] w-full transform transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 shadow-sm" : "-translate-y-full opacity-0"}`} style={{backgroundColor: 'var(--background)'}}>
        <div className="flex flex-col gap-5 w-full items-center justify-center">
        <div className="flex justiy-between w-full px-3 pt-2">
            <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="relative w-16 h-12 sm:w-18 sm:h-13 md:w-20 md:h-15">
            <Image src="/logo/logoTwo.svg" alt="logo" fill className='object-cover' />
            </div>
            </Link>
            <div className="flex items-center ml-auto">
                <div className="flex justify-center items-center p-1 rounded-full hover:bg-gray-300 hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => setIsOpen(false)}>
                    <X className="size-7 sm:size-8" />
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-5 w-full items-center justify-center max-w-xs px-3 sm:px-0 sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Form action={formAction} className="flex w-full">
                    <div className="flex flex-row items-center gap-2 w-full">
                        <div className="relative flex-1">
                            <Search type="submit"className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-700 cursor-pointer" />
                            <input 
                                type="text" 
                                name="query" 
                                placeholder="Search..." 
                                className="w-full pl-10 pr-10 py-3 text-[16px] sm:text-[18px] md:text-[20px] rounded-md border border-gray-300 focus:outline-none focus:ring-0" 
                                value={query} 
                                disabled={isPending}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {query && (
                                <X 
                                    className="absolute text-gray-700 right-3 top-1/2 -translate-y-1/2 size-5 sm:size-6 cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-500" 
                                    onClick={() => setQuery('')}
                                />
                            )}
                        </div>
                    </div>
                </Form>
                <div className="flex flex-col items-start justify-start w-full gap-3">
                    <p className="text-[16px] sm:text-[18px] md:text-[20px]">Recent Searches</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex flex-row gap-2 items-center text-white text-[14px] sm:text-[16px] md:text-[18px] px-2 py-1 rounded-full bg-gray-500 hover:bg-gray-400 transition-all duration-300 ease-in-out cursor-pointer">
                            <p>
                                PlaceHolder
                            </p>
                            <X className="size-4 sm:size-5 md:size-6 cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-500" />
                        </div>

                    </div>


                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default SearchPopUp