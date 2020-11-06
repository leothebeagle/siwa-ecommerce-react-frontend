export default function cartReducer(state = {
    cart: [],
    addingItemToCart: false
}, action) {
    switch(action.type) {
        case 'ADDING_TO_CART':
            console.log('Adding items to cart')
        default:
            return state
    }
}