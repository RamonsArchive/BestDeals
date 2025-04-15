import { auth } from '@/auth';
import React, { Suspense } from 'react'
import { fetchAllProducts } from '@/lib/serverActions';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import { fetchProducts } from '@/lib/serverActions';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const experimental_ppr = true;

const page = async ({params, searchParams}: {params: Promise<{path: string}>, searchParams: Promise<{query?: string, f?: string}>}) => {
  const session = await auth();
  const userId = session?.user?.id;

  const path = (await params).path || "/";
  const query = (await searchParams).query || "";
  const filters = (await searchParams).f || "";

  let callbackUrl = path;
  const queryParams = new URLSearchParams();
  if (filters) {queryParams.set("f", filters)}
  if (query) {queryParams.set("query", query)}
  if (queryParams.toString()) {callbackUrl += `?${queryParams.toString()}`}
  console.log("callbackUrl", callbackUrl);

  // let heartedProducts = [];

  const products = await fetchProducts(path, query, filters);

  if (userId) {
    // get hearted products;
  }

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