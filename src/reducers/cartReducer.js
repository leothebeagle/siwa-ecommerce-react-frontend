export default function cartReducer(state = {
    cart_id: null,
    cart_items: [],
    addingItemToCart: false
}, action) {
    switch(action.type) {
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