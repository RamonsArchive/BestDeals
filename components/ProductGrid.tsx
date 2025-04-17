"use client";
import React from 'react'
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import ProductCard from '@/components/ProductCard';
import { ProductType } from '@/lib/globalTypes';
import { Suspense, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGrid = ({products, userId, heartedProducts}: {products: ProductType[], userId: string | undefined, heartedProducts: ProductType[]}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  },[products])

  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }

  return (
    <>
    <div className="flex flex-col gap-3">
    <p className="text-[14px] sm:text-[16px] font-semibold">
        Showing{" "}
        {totalPages === 0 ? 0 : (currentPage - 1) * productsPerPage + 1}-{Math.min(currentPage * productsPerPage, products.length)}{" "} of {products.length} results
    </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {currentProducts.map((product) => (
        <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
          <ProductCard key={product.id} product={product} userId={userId} isHearted={heartedProducts.some(heartedProduct => heartedProduct.id === product.id)}/>
        </Suspense>
      ))}
      
    </div>
    <div className="flex justify-center items-center mt-4 gap-3">
      <button className={`px-3 py-1 rounded-full text-[18px] sm:text-[20px] transform transition-all ${currentPage === 1 ? "text-gray-400 pointer-events-none": "text-black transition hover:bg-gray-200 active:bg-gray-200 hover:opacity-60 active:opacity-60 duration-300 ease-in-out"}`}
      onClick={() => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
        handleScrollToTop();
        }}>
        <ChevronLeft className="size-[18px] sm:size-[20px]" />
      </button>
      {Array.from({length: totalPages}, (_, i) => (
        <button key={i} className={`px-3 py-1 rounded-full text-[18px] sm:text-[20px] transform transition-all ${currentPage === i + 1 ? "bg-gray-500 text-white": "hover:bg-gray-300 active:bg-gray-300 duration-300 ease-in-out"}`} onClick={() => {
            setCurrentPage(i + 1);
            handleScrollToTop();
        }}>
            {i + 1}
        </button>
      ))}
      <button className={`px-3 py-1 rounded-full text-[18px] sm:text-[20px] transform transition-all ${currentPage === totalPages ? "text-gray-400 pointer-events-none": "text-black transition hover:bg-gray-200 active:bg-gray-200 hover:opacity-60 active:opacity-60 duration-300 ease-in-out"}`}
      onClick={() => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        handleScrollToTop();
      }}>
        <ChevronRight className="size-[18px] sm:size-[20px]" />
      </button>
    </div>
    </>
  )
}

export default ProductGrid