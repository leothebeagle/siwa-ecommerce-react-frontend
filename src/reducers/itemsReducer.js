export default function itemsReducer(state ={
    productList: [],
    fetchingItems: false
}, action) {
    switch(action.type) {
        case 'FETCHING_ITEMS':
            console.log("fetching users")
            return {
                ...state,
                fetchingItems: true
            }

        case 'ADD_ITEMS':
            console.log(action.payload)
            return {
                ...state,
                productList: action.payload.items,
                fetchingItems: false
            }
        default:
            return state
    }
}