export default function cartReducer(state = {
    cart_id: null,
    cart_items: [],
    addingItemToCart: false
}, action) {
    switch(action.type) {
        case 'ADD_NEW_CART':
            return {
                ...state,
                cart_id: action.payload.id
            }


        case 'UPDATE_CART':
            console.log('updating cart')
            return {
                ...state,
                cart_id: action.payload.cart.id,
                cart_items: action.payload.cart.items
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