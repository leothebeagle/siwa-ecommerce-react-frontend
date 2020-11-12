

export const placeOrder = () => {
    
    return (dispatch) => {
       dispatch({type: 'PLACING_ORDER'})
       fetch('http://localhost:3000/orders', {
            method: 'POST', 
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json'
            }
       })
       .then(resp => resp.json())
       .then(res => console.log(res))
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

