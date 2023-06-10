import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../src/app/features/cart/CartSlice'

export const store = configureStore({
    reducer: {
     cart: cartReducer
    }
})