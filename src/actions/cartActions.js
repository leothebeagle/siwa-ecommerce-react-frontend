
export const placeOrder = () => {
    console.log("trying to place an order from action")
    return {
        type: 'PLACE_ORDER'
    }
}

export const addNewCart = (cart) => {
    return {
        type: 'ADD_NEW_CART',
        payload: cart
    }
}


export const updateCart = (cart) => {
    return {
        type: 'UPDATE_CART',
        payload: cart
    }
}

export const addItemToCart = (item, cartId) => {
    return (dispatch) => {
        dispatch({type:'ADDING_TO_CART'})
        fetch('http://localhost:3000/carts', 
        {
          method: 'POST', 
          credentials: 'include', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           item: item,
           cart_id: cartId
          }),
        })
        .then(resp => resp.json())
        .then(res => dispatch(updateCart(res)))
    }
}

