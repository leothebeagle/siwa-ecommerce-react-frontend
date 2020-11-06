import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import {addToCart} from '../actions/cartActions'

const ItemsList = (props) => {

    const handleAddToCart = (item) => {
        // console.log(`Adding ${item.name} to cart`)
       props.addToCart() 
    }

    const items = props.items.map(item => <Item item={item} addToCart={() => handleAddToCart(item)}/>)
    return(
        <div>
        <h3>Items to purchase go here</h3>
            {items}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: () => dispatch(addToCart())
})

const mapStateToProps = state => ({
     items: state.items.itemList
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
