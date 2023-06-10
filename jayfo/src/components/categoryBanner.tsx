import React from 'react'
import { urlFor } from "@/lib/client";
import Image from 'next/image';
import Link from 'next/link';
import {TbCurrencyNaira} from 'react-icons/tb'
import ProductCard from './ProductCard';

const CategoryBanner = ({product, filtered}) => {
    const filters = product.filter(item => (item.category == filtered))
    const list = filters.map(item => (
        <Link href={`${item.name}`}>
            
           <ProductCard item={item} />
        </Link>
       
    ))
  return (
    <>
        <h2 className="text-4xl font-bold">{filtered}</h2>
        <div className="flex ">{list}</div> 
        
    </>
  )
}

export default CategoryBanner