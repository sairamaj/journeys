import { React , useContext} from 'react';
import { ShopContext } from '../../context/shop-context';
import "./cart.css"

export const CartItem = (props) => {
    const { id, productName, productImage, price } = props.data
    const { addToCart, removeFromCart, updateCartQuantity, cartItems } = useContext(ShopContext)

    return (
        <div className='cartItem'>
            <img src={productImage} />

            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={ () => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={ (e) => updateCartQuantity(id, Number(e.target.value))}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}