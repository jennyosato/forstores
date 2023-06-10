import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '@/app/features/cart/CartSlice'

const Cart = () => {
    const products = useSelector(selectProducts)
    const productList = products.map(product => {
        return(
            <div>
                
            </div>
        )
    })
  return (
    <div>Cart</div>
  )
}

export default Cart