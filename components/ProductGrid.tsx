import React from 'react'
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import ProductCard from '@/components/ProductCard';
import { ProductType } from '@/lib/globalTypes';
import { Suspense } from 'react';
const ProductGrid = ({products, userId}: {products: ProductType[], userId: string | undefined}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
          <ProductCard key={product.id} product={product} userId={userId}/>
        </Suspense>
      ))}
    </div>
  )
}

export default ProductGrid