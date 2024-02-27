import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item"
import { useSelector } from 'react-redux';
import "./cart.css"


export const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items)
    const subTotal = useSelector(state => state.cart.subTotal)

    console.log('cart items')
    console.log(cartItems)
    console.log('subtotal')
    console.log(subTotal)
    return <div className="cart">
        <h1>Your cart items</h1>
        <div className="cartItems">
            {PRODUCTS.map(product => {
                if (cartItems[product.id] > 0) {
                    return <CartItem data={product} />
                }
            })}

        </div>

        {subTotal > 0 ?
            <div className="checkout">
                <p>Subtotal: ${subTotal}</p>
                <button onClick={() => navigate('/')}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
            : <h1>Your Cart is empty!</h1>}

    </div>
}
