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