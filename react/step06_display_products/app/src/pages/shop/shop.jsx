import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div>
            <div className='shopTitle'>
                <h1>Home made ornamentals</h1>
            </div>

            <div className='products'>
                {PRODUCTS.map(product => {
                    return <Product data={product}/>
                })}
            </div>

        </div>)
}
