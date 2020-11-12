import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { placeOrder } from '../actions/cartActions';

const CartPage = (props) => { 
    
    const handleSubmitOrder = () => {
        props.submitOrder()
    }

    return(
        <div>
            <Cart cartItems={props.cartItems} submitOrder={handleSubmitOrder}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    submitOrder: () => dispatch(placeOrder())
});

const mapStateToProps = state => ({
     cartItems: state.cart.cartItems
});


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);