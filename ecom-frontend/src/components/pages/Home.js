import React from 'react'
import Categories from '.././homecomponent/Categories';
import './Home.css';

function Home() {
    return (
        <div id='home-container'>
            {/* <FilterSale /> */}
            <div id='bigfs-container'>FilterSale</div>
            <div id='bigcate-container'>
            <Categories />
            </div>
            <div id='bigfooter-container'>Footer</div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home
