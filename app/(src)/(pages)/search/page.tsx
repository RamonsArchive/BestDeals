import React from 'react'
import { auth } from '@/auth';
import { fetchProducts, fetchHeartedProducts } from '@/lib/serverActions';
import ProductGrid from '@/components/ProductGrid';
import { ProductType } from '@/lib/globalTypes';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const experimental_ppr = true;

const page = async ({params, searchParams}: {params: Promise<{path: string}>, searchParams: Promise<{query?: string, f?: string, price?: string, zip?: string}>}) => {
  const path = (await params).path || "/";
  const query = (await searchParams).query || "";
  const filters = (await searchParams).f || "";
  const price = (await searchParams).price || "";
  const zip = (await searchParams).zip || "";

  console.log("price", price);
  console.log("zip", zip);


  const session = await auth();
  const userId = session?.user?.id;
  let heartedProducts: ProductType[] = [];       
  if (userId) {
    // fetch hearted products
    heartedProducts = await fetchHeartedProducts(userId);
  }

  const products = await fetchProducts(userId, query, filters, price, zip);

  return ( 
    <main className="w-full h-full flex flex-col flex-1 gap-5 p-5">
    <p className="text-[20px] sm:text-[24px] font-bold">All Products</p>
    <ProductGrid products={products} userId={userId} heartedProducts={heartedProducts} />
  </main>
  )
}

export default page