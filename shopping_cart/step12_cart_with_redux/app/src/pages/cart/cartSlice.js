import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS } from '../../products.js'

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }

    return cart;
}

const getSubTotal = (cartItems) => {
    // go through each cart
    var subtotal = 0
    for (var item in cartItems) {
        var product = PRODUCTS.find(p => p.id == item);
        if (cartItems[item] > 0) {
            subtotal += product.price * cartItems[item]
        }
    }
    return subtotal;
};

// no cart items
const initialState =
{
    subTotal: 0,
    items: getDefaultCart()
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
                state.items[action.payload] = state.items[action.payload] + 1
                state.subTotal = getSubTotal(state.items);
            }
        },
        removeFromCart: {
            reducer(state, action) {
                state.items[action.payload] = state.items[action.payload] - 1
                state.subTotal = getSubTotal(state.items);
            }
        },
        updateCartQuantity: {
            reducer(state, action) {
                state.items[action.payload.id] = action.payload.quantity;
                state.subTotal = getSubTotal(state.items);
            }
        }

    }
})

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;