import { React, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateCartQuantity } from '../cart/cartSlice';
import "./cart.css"

export const CartItem = (props) => {
    const { id, productName, productImage, price } = props.data
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()


    const addItemToCart = (id) => {
        dispatch(addToCart(id))
    }
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    const updateItemToCart = (id, quantity) => {
        dispatch(updateCartQuantity({ id, quantity }));
    }

    return (
        <div className='cartItem'>
            <img src={productImage} />

            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeItemFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateItemToCart(id, Number(e.target.value))} />
                    <button onClick={() => addItemToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}