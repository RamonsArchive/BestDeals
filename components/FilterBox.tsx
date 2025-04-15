"use client";
import React from 'react'
import { Square, Check } from 'lucide-react'
const FilterBox = ({category, isChecked, expanded, option, toggleFilter}: {category: string, isChecked: boolean, expanded: boolean, option: string, toggleFilter: (category: string, filter: string) => void}) => {

  return (
    <button className={`flex flex-row gap-3 w-full text-[16px] sm:text-[17px] font-regular cursor-pointer transform transition-all duration-300 ease-in-out ${expanded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`} onClick={() => toggleFilter(category, option)}>
        <div className="relative">
        <Square className="size-5 sm:size-6" />
        {isChecked && <Check className="size-5 sm:size-6 absolute top-0 left-0" />}
        </div>

        <p>{option}</p>

    </button>
  )
}

export default FilterBox