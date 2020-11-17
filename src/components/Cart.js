import React from 'react';
import Item from './Item'

const Cart = (props) => {
    
    const buttonText = "Remove Item"
    const cartItems = props.cartItems.map((cartItem) => <Item item={cartItem} handleButtonClick={() => props.handleButtonClick(cartItem)} buttonText={buttonText} />)
    // you will pass Item the callback fn to handle deleting an item. handleButtonClick = props.handleDeleteItem(cartItem)
    // over here you should also pass in button text 
    
    return(
        <div>
            <h4>Shopping Cart</h4>
            <h3>Cart total: ${props.total}</h3>

            {cartItems}

            <button onClick={props.submitOrder}>Place Order</button>
        </div>
    )
}

export default Cart;