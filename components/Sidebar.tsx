"use client";
import React from 'react';
import {useState} from "react";
import { useFilters } from './FilterContext';
import {ChevronDown, ChevronUp} from "lucide-react";
import FilterBox from './FilterBox';

export function Sidebar() {
  const {
    filters,
    priceRange,
    setPriceRange,
    toggleFilter,
    toggleCategory,
    selectedFilters,
    priceDrop,
    setPriceDrop,
    locationDrop,
    setLocationDrop,
    zipCode,
    setZipCode
  } = useFilters();
  return (
    <aside className="flex flex-col gap-5 w-full min-h-[calc(100vh-4rem)] items-center pt-5 mb-[4rem]">
      <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-start">Filters </p>
      <div className="flex flex-col gap-5 items-center w-full font-monsterrat text-[12px] xs:text-[14px] sm:text-[16px] lg:text-[18px] pl-3 pr-3 pb-3 sm:p-3">
        {Object.entries(filters).map(([category, {expanded, options}]) => (
          <div key={category} className={`flex flex-col w-full gap-4 border-b-[1px] border-gray-200 pb-3`}>
            <button className="flex flex-row w-full justify-between items-center cursor-pointer" onClick={() => toggleCategory(category)}>
            <p className="text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">{category.slice(0, 1).toUpperCase() + category.slice(1)}</p>
            {expanded ? <ChevronUp className="size-4 xs:size-5 sm:size-6 lg:size-7 cursor-pointer" /> : <ChevronDown className="size-4 xs:size-5 sm:size-6 lg:size-7 cursor-pointer"  />
            }
            </button>
            <div className={`flex flex-col gap-2 transform transition-all duration-300 ease-in-out ${expanded ? "max-h-full" : "max-h-0 overflow-hidden"} `}>
            {options.map((option, index) => (
               <FilterBox key={index} category={category} isChecked={selectedFilters[category]?.includes(option)} expanded={expanded} option={option} toggleFilter={toggleFilter} />
            ))}
            </div>
           
          </div>
        ))}
        <div className="flex flex-col w-full gap-3 border-b-[1px] border-gray-200 pb-3">
          <button className="flex flex-row w-full justify-between items-center" onClick={() => setLocationDrop((prev) => !prev)}>
            <p className="text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">Location</p>
            {locationDrop ? <ChevronUp className="size-4 xs:size-5 sm:size-6 lg:size-7 cursor-pointer" /> : <ChevronDown className="size-4 xs:size-5 sm:size-6 lg:size-7 cursor-pointer"  />}
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
                className="w-full p-2 mr-2 rounded-md active:outline-none focus:outline-none text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[16px]"
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                  if (onlyNums.length <= 5) {
                    setZipCode(onlyNums);
                  }
                }}
              />
              <span className={`text-[10px] xs:text-[11px] sm:text-[12px] lg:text-[13px] pl-2 font-regular whitespace-nowrap ${zipCode === "" ? "text-gray-500" : zipCode.length === 5 ? "text-[#22c55e]" : "text-red-500"}`}>
                {zipCode === "" ? "No zip yet" : `Zip: ${zipCode}`}
              </span>
              <div className="flex flex-col gap-1 w-full">
              <button className={`bg-gradient-to-r from-[#1877f2] via-[#1668d4] to-[#1459b6] text-white px-2 py-1 rounded-md transform transition-all duration-200 ease-in-out hover:from-[#1668d4] hover:via-[#1459b6] hover:to-[#124ca8] active:scale-95 text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[16px] shadow-md ${zipCode.length === 5 ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}>Search</button>
              <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-2 py-1 rounded-md transform transition-all duration-200 ease-in-out hover:from-red-600 hover:via-red-700 hover:to-red-800 active:scale-95 cursor-pointer text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[16px] shadow-md" onClick={() => setZipCode("")}>Clear</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <button className="flex flex-row w-full justify-between items-center" onClick={() => setPriceDrop((prev) => !prev)}>
            <p className="text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">Price</p>
            {priceDrop ? <ChevronUp className="size-4 xs:size-5 sm:size-6 lg:size-7 cursor-pointer" /> : <ChevronDown className="size-4 xs:size-5 sm:size-6 lg:size-7 cursor-pointer"  />}
          </button>
          <div className={`flex flex-row gap-2 transform transition-all duration-300 ease-in-out w-full ${priceDrop ? "max-h-full" : "max-h-0 overflow-hidden"} `}>
            <div className={`flex flex-col gap-3 cursor-pointer transform transition-all duration-200 ease-in-out w-full ${priceDrop ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
              <div className="flex flex-row gap-2">
              <span className="text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[16px] font-regular whitespace-nowrap">${priceRange.min} - </span>
              <span className="text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[16px] font-regular whitespace-nowrap">${priceRange.value} </span>
              <span className="text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[16px] font-regular whitespace-nowrap">- ${ priceRange.max}</span>
              </div>
              <input type="range" min={priceRange.min} max={priceRange.max} value={priceRange.value} onChange={(e) => setPriceRange({...priceRange, value: parseInt(e.target.value)})} className="flex-1" />
              
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 