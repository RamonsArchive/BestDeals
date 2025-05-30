import { auth } from '@/auth';
import React from 'react'
import { fetchHeartedProducts, fetchProducts } from '@/lib/serverActions';
import ProductGrid from '@/components/ProductGrid';
import { ProductType } from '@/lib/globalTypes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const experimental_ppr = true;

const page = async ({params, searchParams}: {params: Promise<{path: string}>, searchParams: Promise<{query?: string, f?: string, min?: string, max?: string, zip?: string, radius?: string}>}) => {
  const session = await auth();
  console.log("session", session);
  console.log("session?.user", session?.user);
  console.log("session?.user?.id", session?.user?.id);
  const userId = session?.user?.id || "";

  const path = (await params).path || "/";
  const query = (await searchParams).query || "";
  const filters = (await searchParams).f || "";
  const max = (await searchParams).max || "";
  const min = (await searchParams).min || "";
  const zip = (await searchParams).zip || "";
  const radius = (await searchParams).radius || "";
  console.log("zip", zip);

  let callbackUrl = path;
  const queryParams = new URLSearchParams();
  if (filters) {queryParams.set("f", filters)}
  if (query) {queryParams.set("query", query)}
  if (queryParams.toString()) {callbackUrl += `?${queryParams.toString()}`}
  console.log("callbackUrl", callbackUrl);



  const products = await fetchProducts(userId, query, filters, zip, min, max, radius);
  console.log("products", products);

  /*let heartedProducts: ProductType[] = [];
  if (userId) {
    heartedProducts = await fetchHeartedProducts(userId);
  }*/
  //console.log('heartedProducts', heartedProducts);
  const heartedProducts: ProductType[] = [];
  return (
    <main className="w-full h-full flex flex-col flex-1 gap-5 p-5">
      <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold">All Products</p>
      <ProductGrid products={products} userId={userId} heartedProducts={heartedProducts} />
    </main>
  )
}

export default page