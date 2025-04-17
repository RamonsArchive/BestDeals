"use client";
import React from 'react'
import {useState, useEffect} from 'react';
import { ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import {useContext } from 'react';
import { FilterContext } from './FilterContext';
import FilterBox from './FilterBox';
import { X } from 'lucide-react';

const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {filters, selectedFilters, toggleFilter, toggleCategory, priceRange, priceDrop, setPriceDrop, locationDrop, setLocationDrop, zipCode, setZipCode, setPriceValue} = useContext(FilterContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden">
        <div className="flex w-full justify-between items-center ml-auto pr-3">
          <button className="flex flex-row gap-2 items-center ml-auto text-[16px] font-medium bg-gray-500 text-white px-3 py-2 rounded-full hover:bg-gray-600 active:bg-gray-600 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => setIsOpen(true)}>
            Filters
            <SlidersHorizontal className="size-4 text-white" />
          </button>
        </div>
      </div>
    
      <div className={`fixed top-0 left-0 w-full h-full z-[50] transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{backgroundColor: 'var(--background)'}}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center justify-center p-1 ml-auto rounded-full hover:bg-gray-300 hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => setIsOpen(false)}>
              <X className="size-7 sm:size-8 cursor-pointer" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-hidden px-4 pb-20">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-[18px] font-regular">Filters</p>
              </div>
              {Object.entries(filters).map(([category, {expanded, options}]) => (
                <div key={category} className={`flex flex-col w-full gap-4 border-b-[1px] border-gray-200 pb-3 pt-3`}>
                  <button className="flex flex-row w-full justify-between items-center cursor-pointer" onClick={() => toggleCategory(category)}>
                    <p className="text-[18px] sm:text-[20px] font-semibold">
                      {category.slice(0, 1).toUpperCase() + category.slice(1)}
                    </p>
                    {expanded ? 
                      <ChevronUp className="size-6 sm:size-7 cursor-pointer" /> : 
                      <ChevronDown className="size-6 sm:size-7 cursor-pointer" />
                    }
                  </button>
                  <div className={`flex flex-col gap-2 transform transition-all duration-300 ease-in-out ${expanded ? "max-h-full" : "max-h-0 overflow-hidden"}`}>
                    {options.map((option, index) => (
                      <FilterBox 
                        key={index}
                        category={category}
                        isChecked={selectedFilters[category]?.includes(option)}
                        expanded={expanded}
                        option={option}
                        toggleFilter={toggleFilter}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col w-full gap-3 border-b-[1px] border-gray-200 pb-3">
                <button className="flex flex-row w-full justify-between items-center" onClick={() => setLocationDrop(!locationDrop)}>
                  <p className="text-[18px] sm:text-[20px] font-semibold">Location</p>
                  {locationDrop ? <ChevronUp className="size-6 sm:size-7 cursor-pointer" /> : <ChevronDown className="size-6 sm:size-7 cursor-pointer"  />}
                </button>
                <div className={`flex flex-row gap-2 transform transition-all duration-300 ease-in-out w-full ${locationDrop ? "max-h-full" : "max-h-0 overflow-hidden"} `}>
                  <div className={`flex flex-col gap-2 items-start cursor-pointer transform transition-all duration-200 ease-in-out w-full ${locationDrop ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                    <input 
                      type="text"
                      inputMode="numeric" 
                      pattern="[0-9]*"
                      maxLength={5}
                      value={zipCode}
                      placeholder="Zip Code" 
                      className="w-full p-2 mr-2 rounded-md active:outline-none focus:outline-none text-[14px] sm:text-[16px]"
                      onChange={(e) => {
                        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                        if (onlyNums.length <= 5) {
                          setZipCode(onlyNums);
                        }
                      }}
                    />
                    <span className={`text-[11px] sm:text-[12px] lg:text-[13px] pl-2 font-regular whitespace-nowrap ${zipCode === "" ? "text-gray-500" : zipCode.length === 5 ? "text-[#22c55e]" : "text-red-500"}`}>
                      {zipCode === "" ? "No zip yet" : `Zip: ${zipCode}`}
                    </span>
                    <div className="flex flex-col gap-1 w-full">
                      <button className={`bg-gradient-to-r from-[#1877f2] via-[#1668d4] to-[#1459b6] text-white px-2 py-1 rounded-md transform transition-all duration-200 ease-in-out hover:from-[#1668d4] hover:via-[#1459b6] hover:to-[#124ca8] active:scale-95 text-[14px] sm:text-[16px] shadow-md ${zipCode.length === 5 ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}>Search</button>
                      <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-2 py-1 rounded-md transform transition-all duration-200 ease-in-out hover:from-red-600 hover:via-red-700 hover:to-red-800 active:scale-95 cursor-pointer text-[14px] sm:text-[16px] shadow-md" onClick={() => setZipCode("")}>Clear</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-3">
                <button className="flex flex-row w-full justify-between items-center" onClick={() => setPriceDrop(!priceDrop)}>
                  <p className="text-[18px] sm:text-[20px] font-semibold">Price</p>
                  {priceDrop ? <ChevronUp className="size-6 sm:size-7 cursor-pointer" /> : <ChevronDown className="size-6 sm:size-7 cursor-pointer"  />}
                </button>
                <div className={`flex flex-row gap-2 transform transition-all duration-300 ease-in-out w-full ${priceDrop ? "max-h-full" : "max-h-0 overflow-hidden"} `}>
                  <div className={`flex flex-col gap-3 cursor-pointer transform transition-all duration-200 ease-in-out w-full ${priceDrop ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                    <div className="flex flex-row gap-2">
                      <span className="text-[14px] sm:text-[16px] font-regular whitespace-nowrap">${priceRange.min} - </span>
                      <span className="text-[14px] sm:text-[16px] font-regular whitespace-nowrap">${priceRange.value} </span>
                      <span className="text-[14px] sm:text-[16px] font-regular whitespace-nowrap">- ${ priceRange.max}</span>
                    </div>
                    <input type="range" min={priceRange.min} max={priceRange.max} value={priceRange.value} onChange={(e) => setPriceValue(parseInt(e.target.value))} className="flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileSideBar;