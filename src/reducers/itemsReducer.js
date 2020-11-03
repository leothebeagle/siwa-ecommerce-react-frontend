export default function itemsReducer(state ={
    items: [],
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
            console.log("adding items to state")
            return {
                ...state,
                items: action.payload,
                fetchingItems: false
            }
        default:
            return state
    }
}