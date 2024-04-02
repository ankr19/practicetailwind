import Product from '@/components/Product Page/Product'
import { Productmeta } from '@/components/Product Page/Productmeta'
import React from 'react'


// export const metadata = {
//   title: "Product | "+val?.name,
//   description: val?.description
// }

export async function generateMetadata({ params,searchParams }) {
  // console.log(searchParams)
  return {
    title: `Product | ${searchParams?.id}`,
    description: Productmeta(searchParams.id),
  }
}

export default function page() {
  return (
    <div>
      <Product />
    </div>
  )
}
