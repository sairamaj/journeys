import { React } from 'react';
import "./cart.css"

export const CartItem = (props) => {
    const { id, productName, productImage, price } = props.data

    return (
        <div className='cartItem'>
            <img src={productImage} />

            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
        </div>
    )
}