import React from 'react'

function CartItem() {
    return (
        <div>
           <div>
            <img alt='product'/>
            </div> 
            <div>
                <h5>name</h5>
                <h5>price</h5>
            </div>
            <div>
                <button>Cart</button>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default CartItem
