import React from 'react';

const Item = props => {
    return(
        <div>
            <h4>{props.item.name}</h4> <br></br>
            <img src={props.item.image}></img>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <button onClick={props.addToCart}>Add to cart</button>
        </div>
    )
}


export default Item;

// item will get passed a set of props descrigin an item.
// that includes the name, description, price, and sellers