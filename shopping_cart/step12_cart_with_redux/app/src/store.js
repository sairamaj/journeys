import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './pages/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})