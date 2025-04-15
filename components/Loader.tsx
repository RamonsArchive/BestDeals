import React from 'react'
import { LoaderCircle } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 z-[999]">
        <LoaderCircle className="size-10 animate-spin text-gray-500" />
        <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  )
}

export default Loader