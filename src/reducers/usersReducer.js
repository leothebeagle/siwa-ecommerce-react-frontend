export default function usersReducer(state={
  firstName: '',
  lastName: '',
  email: '',
  registering: false,
  loggedIn: false,
  loggingIn: false  
}, action) {

    // const {
    //     firstName, 
    //     lastName, 
    //     email
    // } = action.payload;

    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
                email: action.payload.email,
                registering: false
            }
            case 'REGISTERING_USER':
                return {
                    ...state,
                    registering: true
                }
                
        default: 
            return state;
    }
};