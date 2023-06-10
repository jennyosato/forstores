import React, { ReactElement } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { client } from "@/lib/client";
import { useRouter } from 'next/router';
import ProductCard from '@/components/ProductCard';
import Layout from '@/components/Layout';

const Stores = ({data}) => {
const router = useRouter()
//  console.log(data)
const catQuery = router.query.category
// console.log(catQuery)
const filteredProducts = catQuery ? data.filter(product => (
    product.category.toLowerCase() === catQuery.toString().toLowerCase()
)): data
const products = filteredProducts.map(product => (
<Link href={product.slug.current} key={product.name}>
    <ProductCard item={product} />
</Link>
))
  return (
    <div>
        {/* <Navbar /> */}
        <div className='flex'>
            <nav className='p-2 bg-white h-screen w-1/6 border fixed top-12'>
                <ul className='p-2'>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores' >All</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=furniture' >Furniture</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=electronics' >Electronics</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=kitchen' >Kitchen Appliances</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=beddings' >Beddings</Link>
                    </li>
                    <li className='p-2 font-semibold text-blue-950'>
                        <Link href='/stores?category=curtains' >Curtains</Link>
                    </li>
                    


                </ul>
            </nav>
            <section className='w-5/6 absolute right-0 p-2'>
                <h2 className='text-3xl font-bold text-blue-950 py-2'>Products</h2>
                <div className='w-full grid grid-cols-fluid gap-4'>
                {products}
                </div>
                
            </section>
        </div>
    </div>
  )
}

export default Stores

export const getStaticProps: GetStaticProps = async () => {
    const query = '*[_type=="product"]';
    const data = await client.fetch(query);
    
  
    return {
      props: { data },
    };
  }; 

Stores.getLayout = function getLayout(page:ReactElement) {
    return <Layout>{page}</Layout>;
  };