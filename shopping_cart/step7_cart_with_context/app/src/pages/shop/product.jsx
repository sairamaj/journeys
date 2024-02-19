import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, productImage, price } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemsCount = cartItems[id];
    return <div className='product'>
        <div>
            <img src={productImage} />
        </div>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemsCount > 0 && <>({cartItemsCount})</>}</button>
    </div >
}