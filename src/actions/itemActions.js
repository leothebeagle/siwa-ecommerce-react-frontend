export const fetchItems = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_ITEMS'}) 
    }
}