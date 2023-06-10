import React, { ReactComponentElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { client, urlFor} from "@/lib/client";
import Layout from '@/components/Layout';
import {TbCurrencyNaira} from 'react-icons/tb'



const Product = ({data}:any) => {
  console.log(data)
  return (
    <div className='min-h-screen'>

    
    <div className='flex w-9/12 mx-auto border h-96 shadow-lg'>
     
      <div className='w-1/2 bg-white flex flex-col justify-center px-4 items-center'>
       <h2 className='text-3xl font-semibold'>{data.name}</h2>
       <p className='flex items-center'>Price: <TbCurrencyNaira />{data.price} </p>
       <p>Color: {data.color}</p>
       <p>Category: {data.category}</p>
       <p>{data.description}</p>
       <button className='px-6 py-2 bg-gray-400 text-white font-semibold rounded-full'>Buy Now</button>
      </div>
      <div className='w-1/2 h-full border-2'>
       <img src={urlFor(data.image)} alt={data.name} width={400} height={400} className='w-full h-full' />
      </div>
      
    </div>
    </div>
  )
}

export default Product
export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type=="product"]';
  const data = await client.fetch(query);
  const item = data.map(i => ({params: {slug: i.slug.current}}
  ))
  return {
    paths: item, fallback: true
  };
}; 
 export const getStaticProps: GetStaticProps = async ({params: {slug}}) => {
  const query = `*[_type=="product" && slug.current == '${slug}'][0]`
  const data = await client.fetch(query);
  return {
    props: {data}
  }
 }
 Product.getLayout = function getLayout(page:ReactElement) {
  return <Layout>{page}</Layout>;
};