export default function cartReducer(state = {
    cartId: null,
    cartItems: [],
    addingItemToCart: false
}, action) {
    switch(action.type) {
        case 'ADD_NEW_CART':
            return {
                ...state,
                cartId: action.payload.id
            }


        case 'UPDATE_CART':
            console.log('updating cart')
            return {
                ...state,
                cartId: action.payload.cart.id,
                cartItems: action.payload.cart.items
            }

        case 'ADDING_TO_CART':
            console.log('Adding items to cart')
            return {
                ...state,
                addingItemToCart: true
            }
        default:
            return state
    }
}