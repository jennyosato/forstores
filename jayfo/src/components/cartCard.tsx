import React from 'react'
import { urlFor } from "@/lib/client";
import {TbCurrencyNaira} from 'react-icons/tb'
import Image from 'next/image';

const cartCard = ({product}) => {
  return (
    <div>
        <Image src={urlFor(product.image)} alt={product.title} />
        <h2>{product.title}</h2>
        <div>
            <button>-</button>
            <span>{product.qty}</span>
            <button onClick={() => product.qty += 1}>+</button>
            
            </div>
    </div>
  )
}

export default cartCard