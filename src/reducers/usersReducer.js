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
                firstName: action.payload.user.first_name,
                lastName: action.payload.user.last_name,
                email: action.payload.user.email,
                registering: false,
                loggedIn: action.payload.logged_in
            }
        case 'REGISTERING_USER':
            return {
                ...state,
                registering: true
            }

        case 'LOGOUT_USER':
            console.log("user has been logged out")
            return {
                ...state,
                firstName: "",
                lastName: "",
                email: "",
                registering: false,
                loggedIn: false
            }
        default: 
            return state;
    }
};
