import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { placeOrder } from '../actions/cartActions';

const CartPage = (props) => { 
    
    const handleSubmitOrder = () => {
        props.submitOrder()
    }

    // you should define a fn here called handleDeleteItem(item) that calls props.deleteItem(item)

    return(
        <div>
            <Cart cartItems={props.cartItems} total={props.total} submitOrder={handleSubmitOrder}/>
            {/* you should pass in a fn that will be passed on by Cart into item that handles deleting an item */}
            {/* handleButtonClick={handleDeleteItem(item)} */}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    submitOrder: () => dispatch(placeOrder()),
    deleteItem: (item) => dispatch(removeFromCart(item));
    // include a dispatch to delete an item
});


const mapStateToProps = state => ({
     cartItems: state.cart.cartItems,
     total: state.cart.total
});


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);