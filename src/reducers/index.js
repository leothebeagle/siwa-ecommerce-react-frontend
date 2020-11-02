import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer'

export default combineReducers({
    user: usersReducer,
    items: itemsReducer
})
