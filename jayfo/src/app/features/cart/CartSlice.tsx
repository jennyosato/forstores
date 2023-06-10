import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Sofa', category: 'Furniture'}
]
const countSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const inCart = state.find(item => item.id === action.payload.id)
           !inCart && state.push(action.payload) 
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
})
export const selectProducts = (state) => state.cart
export const {addToCart, decrement, reset} = countSlice.actions

export default countSlice.reducer