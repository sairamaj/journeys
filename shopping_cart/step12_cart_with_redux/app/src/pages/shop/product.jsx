import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

export const Product = (props) => {
    const { id, productName, productImage, price } = props.data
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const addItemToCart = (id) => {
        dispatch(addToCart(id))
    }

    const cartItemsCount = cartItems[id];
    return <div className='product'>
        <div>
            <img src={productImage} />
        </div>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addItemToCart(id)}>
            Add To Cart {cartItemsCount > 0 && <>({cartItemsCount})</>}</button>
    </div >
}