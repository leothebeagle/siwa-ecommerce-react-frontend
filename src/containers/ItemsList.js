import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import {addItemToCart} from '../actions/cartActions';
import {filterItems } from '../actions/itemActions';
// import {deleteCartItem} from '../actions/cartActions
import {logoutUser} from '../actions/userActions';
import Navbar from '../components/Navbar';

import Filter from '../components/Filter';

const ItemsList = (props) => {

    const handleAddToCartClick = (item) => {
        // console.log(`Adding ${item.name} to cart`)
       props.addItemToCart(item, props.cartId) 
    }

    const buttonText = "Add to cart"

    const items = props.items.map(item => <Item item={item} handleButtonClick={() => handleAddToCartClick(item)} buttonText={buttonText}/>)
    
    return(
        <>
        <Navbar handleLogoutClick={props.handleLogoutClick} user={props.user} />
        <Filter filterItems={props.filterItems} />
        <section className="items-container">
            {items}
        </section>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item, cartId) => dispatch(addItemToCart(item, cartId)),
    handleLogoutClick: () => dispatch(logoutUser()),
    filterItems: (selection) => dispatch(filterItems(selection))
});

const mapStateToProps = state => ({
     items: state.items.itemList,
     cartId: state.cart.cartId,
     user: state.user
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
