function addItems(items) {
    return {
        type:'ADD_ITEMS',
        payload: items
    }
}

export const fetchItems = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_ITEMS'})
        
        fetch('http://localhost:3000/items', {credentials: 'include'}) 
        .then(resp => resp.json())
        .then(resp => {
            dispatch(addItems(resp))
        })
    }
}

export const filterItems = (selection) => {
    const ourUrl = new URL('http://localhost:3000/items')
    ourUrl.searchParams.set('q', selection)
    // double check that the correct endpoint is being used. 
    return (dispatch) => {        
        fetch(ourUrl, {credentials: 'include'}) 
        .then(resp => resp.json())
        .then(resp => {
            dispatch(addItems(resp))
        })
    }
}