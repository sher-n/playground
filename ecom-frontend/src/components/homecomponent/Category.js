import React from 'react';
import CartItem from './CartItem';
import './Category.css';

function Category() {
    return (
        <div id='container'>
            <div id ='catename-container'>Category</div>
            <div id='cateproduct-container'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    )
}

export default Category
