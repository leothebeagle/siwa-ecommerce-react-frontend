import React from 'react';
import Item from './Item'

const Cart = (props) => {
  
    const cartItems = props.cartItems.map((cartItem) => <Item item={cartItem} />)
    
    return(
        <div>
            <h4>Shopping Cart</h4>

            {cartItems}

            <button onClick={props.submitOrder}>Place Order</button>
        </div>
    )
}

export default Cart;