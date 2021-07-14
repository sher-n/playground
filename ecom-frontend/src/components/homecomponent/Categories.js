import React from 'react';
import Category from './Category';
import './Categories.css'

function Categories() {
    return (
        <div id='container'>
            <div className='each-cate-container'>
                <Category />
            </div>
            <div className='each-cate-container'>
                <Category />
            </div>
            <div className='each-cate-container'>
                <Category />
            </div>
            
        </div>
    )
}

export default Categories
