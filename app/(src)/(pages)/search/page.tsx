import React from 'react'
import { auth } from '@/auth';
import { fetchProducts } from '@/lib/serverActions';
import ProductGrid from '@/components/ProductGrid';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const experimental_ppr = true;

const page = async ({params, searchParams}: {params: Promise<{path: string}>, searchParams: Promise<{query?: string, f?: string}>}) => {
  const path = (await params).path || "/";
  const query = (await searchParams).query || "";
  const filters = (await searchParams).f || "";

  const session = await auth();
  const userId = session?.user?.id;
  // heartedProducts = []
  if (userId) {
    // fetch hearted products
  }

  const products = await fetchProducts(path, query, filters);

  return (
    <main className="w-full h-full flex flex-col flex-1 gap-5 p-5">
    <p className="text-[20px] sm:text-[24px] font-bold">All Products</p>
    <ProductGrid products={products} userId={userId} />
  </main>
  )
}

export default page