"use client";
import React, { useState } from 'react'
import { ProductType } from '@/lib/globalTypes'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { writeHeartedProduct } from '@/lib/actions';
import { toast } from 'sonner';

const formatPrice = (price: string | number | null) => {
  if (price === null) return 'N/A';
  if (typeof price === 'string') {
    return price;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

const ProductCard = ({ product, userId, isHearted }: { product: ProductType, userId: string | undefined, isHearted: boolean }) => {
  const { id, title, price, location_city, location_state, image_url, miles } = product;
  const deal = "good";
  const [hearted, setHearted] = useState(isHearted);

  const handleHeartClick = async () => {
    console.log("in handleHeartClick");
    console.log("userId", userId);
    /*
    if (userId) {
      setHearted(!hearted);
      const result = await writeHeartedProduct(userId, id);
      if (result.status === "SUCCESS") {
        toast.success("SUCCESS", {
          description: "Product hearted successfully"
        });
      } else {
        setHearted(!isHearted);
        toast.error("ERROR", {
          description: "Failed to heart product"
        });
      }
    } else {
      toast.error("ERROR", {
        description: "Please login to heart products"
      });
    }
    */
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-sm transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-105 w-full h-full w-[150px] min-h-[200px] max-w-[400px] max-h-[450px] overflow-hidden">
      <div className="relative w-full flex-[3] overflow-hidden rounded-sm">
        {image_url ? (
          <Image
            src={image_url}
            alt={title || ""}
            width={420}
            height={420}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <ShoppingCart className="size-12 text-gray-400" />
          </div>
        )}

        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-all duration-300 ease-in-out" onClick={handleHeartClick}>
          <Heart className={`size-5 md:size-6 text-gray-700 hover:text-red-500 transition-colors duration-300 ease-in-out ${hearted ? 'text-red-500' : ''}`} />
        </div>
      </div>

      <Link href={`/product/${id} w-full h-full`}>
        <div className="flex-[2] flex flex-col gap-0.5 py-2 px-2 pb-5 overflow-hidden">
          <span className="font-plex-sans font-semibold text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[20px] line-clamp-2">
            {title}
          </span>
          <div className="flex flex-row gap-2">
            <span className="font-regular text-[10px] xs:text-[12px] sm:text-[14px] lg:text-[16px] truncate">{price}</span>
            <span className="font-regular text-[10px] xs:text-[12px] sm:text-[14px] lg:text-[16px] line-through text-gray-500 truncate">{price}</span>
            <span className="font-regular text-[10px] xs:text-[12px] sm:text-[14px] lg:text-[16px] text-end truncate">{deal}</span>
          </div>
          <span className="font-medium text-[12px] xs:text-[14px] sm:text-[16px] lg:text-[18px] truncate">{location_city}, {location_state}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;