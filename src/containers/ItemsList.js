import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item'

const ItemsList = props => {
    const items = props.items.map(item => <Item item={item}/>)
    return(
        <div>
        <h3>Items to purchase go here</h3>
            {items}
        </div>
    )
}

const mapStateToProps = state => ({
     items: state.items.itemList
})

export default connect(mapStateToProps)(ItemsList);
