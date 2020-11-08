
export const addNewCart = (cart) => {
    return {
        type: 'ADD_NEW_CART',
        payload: cart
    }
}

export const addToCart = (dispatch) => {
    return (dispatch) => {
        dispatch({type:'ADDING_TO_CART'})
        //fetch request
        // fetch response and dispatch of actions.
    }
}