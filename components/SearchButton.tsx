"use client";
import React from 'react'
import { Search } from 'lucide-react'
import {useState} from 'react'
import SearchPopUp from './SearchPopUp'


const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
         <Search className="size-9 md:size-10 cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-500 p-1 rounded-full hover:bg-gray-300 active:bg-gray-300" onClick={() => setIsOpen((prev) => !prev)}/>
         <SearchPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default SearchButton
