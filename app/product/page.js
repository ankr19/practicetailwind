// import Product from '@/components/Product Page/Product'
import React from 'react'
import Product2 from '@/components/Product Page/Product2'
import { Productmeta } from '@/components/Product Page/Productmeta'


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
      <Product2 />
    </div>
  )
}
