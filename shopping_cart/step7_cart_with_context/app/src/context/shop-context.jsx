import { React, createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../products.js'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }

    return cart;
}

export const ShopContextProvider = (props) => {
    const [ cartItems, setCartItems ] = useState(getDefaultCart());
    const [ subTotal, setSubTotal] = useState(0);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartQuantity = (itemId, quantity) => {
        setCartItems( (prev) => ({...prev, [itemId]: prev[itemId] = quantity}) )
    }

    useEffect(() => {
        updateSubTotal();
    });

    const updateSubTotal = () => {
        // go through each cart
        var subtotal = 0
        for(var item in cartItems){
            var product = PRODUCTS.find(p => p.id == item);
            if(cartItems[item] > 0){
                subtotal += product.price * cartItems[item]
            }
        }
        setSubTotal(subtotal);
    }

    const contextValue = { cartItems, addToCart, removeFromCart , updateCartQuantity, subTotal};
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
};
