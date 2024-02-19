import { React, useContext } from 'react';
import { PRODUCTS } from "../../products";
import { ShopContext } from '../../context/shop-context';
import { CartItem } from "./cart-item"
import "./cart.css"

export const Cart = () => {
    const { cartItems } = useContext(ShopContext)
    return <div className="cart">
        <h1>Your cart items</h1>
        <div className="cartItems">
            {PRODUCTS.map(product => {
                if (cartItems[product.id] > 0) {
                    return <CartItem data={product} />
                }
            })}

        </div>
    </div>
}
