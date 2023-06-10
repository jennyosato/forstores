import React from 'react'
import { urlFor } from "@/lib/client";
import {TbCurrencyNaira} from 'react-icons/tb'
import { useDispatch } from 'react-redux';
import { addToCart, decrement, reset } from '@/app/features/cart/CartSlice';

const ProductCard = ({item}: object | string) => {
  const dispatch = useDispatch()
  const AddToCart = (i) => {
    let x = {...i, qty: 1}
    dispatch(addToCart(x))
  }
  return (
    <div className='flex border bg-white shadow-lg h-44 hover:scale-105 transition ease-in-out 1s'>
      <div className='w-1/2'>
    <img src={urlFor(item.image)} alt={item.name} width={400} height={400} className='w-full h-full' />
      </div>
      <div className='w-1/2 p-2'>
        <h2 className='text-xl font-semibold'>{item.name}</h2>
        <p className='flex items-center'><TbCurrencyNaira />{item.price}</p>
        <span className='text-xs italic text-gray-500'>Category: {item.category}</span>
        <button onClick={()=> AddToCart(item)} className='px-6 py-2 bg-gray-400 text-white font-semibold rounded-full'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard