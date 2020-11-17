import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import {addItemToCart} from '../actions/cartActions'
// import {deleteCartItem} from '../actions/cartActions

const ItemsList = (props) => {

    const handleAddToCartClick = (item) => {
        // console.log(`Adding ${item.name} to cart`)
       props.addItemToCart(item, props.cartId) 
    }

    const items = props.items.map(item => <Item item={item} addItemToCart={() => handleAddToCartClick(item)}/>)
    
    return(
        <div>
            {items}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item, cartId) => dispatch(addItemToCart(item, cartId))
});

const mapStateToProps = state => ({
     items: state.items.itemList,
     cartId: state.cart.cartId
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
