export default function usersReducer(state={
  firstName: '',
  lastName: '',
  email: '',
  registering: false,
  loggedIn: false,
  loggingIn: false,
  redirectTo: null 
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
                firstName: action.payload.user.first_name,
                lastName: action.payload.user.last_name,
                email: action.payload.user.email,
                registering: false,
                loggedIn: action.payload.logged_in,
                redirectTo: '/'
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
