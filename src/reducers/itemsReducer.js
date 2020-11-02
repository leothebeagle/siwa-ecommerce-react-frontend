export default function itemsReducer(state ={
    items: []
}, action) {
    switch(action.type) {
        case 'FETCHING_ITEMS':
            console.log("fetching users")

        default:
            return state
    }
}