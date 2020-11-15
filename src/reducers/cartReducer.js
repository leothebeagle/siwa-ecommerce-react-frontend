export default function cartReducer(state = {
    cartId: null,
    cartItems: [],
    total: 0,
    addingItemToCart: false,
    placingOrder: false
}, action) {
    const localStoredCart = JSON.parse(localStorage.getItem("cart")).cart
    
    switch(action.type) {

        case 'UPDATE_CART':
            console.log('updating cart')
            return {
                ...state,
                cartId: localStoredCart.id,
                cartItems: localStoredCart.items,
                total: localStoredCart.total
                // cartId: action.payload.cart.id,
                // cartItems: action.payload.cart.items,
                // total: action.payload.cart.total
            }

        case 'ADDING_TO_CART':
            console.log('Adding items to cart')
            return {
                ...state,
                addingItemToCart: true
            }
            
        case 'PLACING_ORDER':
            console.log("placing order")
            
        default:
            return state
    }
}