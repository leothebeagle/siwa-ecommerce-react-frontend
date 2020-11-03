export default function itemsReducer(state ={
    items: [],
    fetchingUsers: false
}, action) {
    switch(action.type) {
        case 'FETCHING_ITEMS':
            console.log("fetching users")
            return {
                ...state,
                fetchingUsers: true
            }

        case 'ADD_ITEMS':
            console.log("adding items to state")
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}