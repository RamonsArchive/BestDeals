import { auth } from '@/auth';
import React, { Suspense } from 'react'
import { fetchAllProducts } from '@/lib/serverActions';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const experimental_ppr = true;

const page = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  if (userId) {
    // get hearted products;
  }

  const products = await fetchAllProducts();
  console.log(products);
  console.log("databaseUrl", process.env.DATABASE_URL);
  return (
    <main className="w-full h-full flex flex-col flex-1 gap-5 p-5">
      <p className="text-[20px] sm:text-[24px] font-bold">All Products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <ProductCard key={product.id} product={product} userId={userId}/>
          </Suspense>
        ))}
      </div>
    </main>
  )
}

export default page