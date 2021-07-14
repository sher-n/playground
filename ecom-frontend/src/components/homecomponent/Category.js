import React from 'react';
import CartItem from './CartItem';
import './Category.css';

function Category() {
    return (
        <div id='container'>
            <div id='cate-name'>
            <h1>Category 1</h1>
            </div>
            <div id='cate-product'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            </div>
        </div>
    )
}

export default Category
