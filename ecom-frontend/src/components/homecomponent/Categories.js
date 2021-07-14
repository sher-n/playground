import React from 'react';
import './Categories.css'
import Category from './Category';

function Categories() {
    return (
        <div id='container'>
            <div  id="each-cate-container"><Category /></div>
            <div  id="each-cate-container"><Category /></div>
            <div  id="each-cate-container"><Category /></div>
        </div>
    )
}

export default Categories
