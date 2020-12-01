import React from 'react';

const Item = props => {
    return(
        <div className="item-card">
        
            <div className="item-image">
                <img src={props.item.image}></img>
            </div>

            <div className="item-info">
                <h4>{props.item.name}</h4> <br></br>
                <p>${props.item.price}</p>
            </div>

            <button type="button" onClick={props.handleButtonClick}>{props.buttonText}</button>

        </div>
    )
}

export default Item;

// item will get passed a set of props descrigin an item.
// that includes the name, description, price, and sellers