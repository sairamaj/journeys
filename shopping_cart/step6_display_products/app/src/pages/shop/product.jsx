import React from 'react';

export const Product = (props) => {
    const { id, productName, productImage, price } = props.data
    return <div className='product'>
        <div>
            <img src={productImage} />
        </div>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn'>Add To Cart</button>
    </div >
}