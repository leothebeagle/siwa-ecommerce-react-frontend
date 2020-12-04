import React from 'react';
import Item from './Item'

const Cart = (props) => {
    // expecting to receive in props:
    // a function to handle submitting order.
    // a function to handle removing an item from cart. (will pass this on to Item) 
    const buttonText = "Remove Item"
    const cartItems = props.cartItems.map((cartItem) => <Item item={cartItem} handleButtonClick={() => props.handleButtonClick(cartItem)} buttonText={buttonText} />)

    
    // you will pass Item the callback fn to handle deleting an item. handleButtonClick = props.handleDeleteItem(cartItem).
    // over here you should also pass in button text. 
    
    return(
        <div className="cart-container">    
            <section className="cart-items-container">
                <div className="items-container">{cartItems}</div>

                <div className="cart-info">
                    <h3 className="cart-total">Cart total: ${props.total}</h3>
                    <button onClick={props.submitOrder}>Place Order</button>
                </div>
            </section>
        </div>
    )
}

export default Cart;