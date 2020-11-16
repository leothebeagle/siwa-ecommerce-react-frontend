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
    const localStoredUser = JSON.parse(localStorage.getItem("user"))
    const loggedInFlag = JSON.parse(localStorage.getItem("loggedIn"))
    
    switch(action.type) {
        case 'ADD_USER':
            // pull all relevant data from state
            return {
                ...state,
                firstName: localStoredUser.first_name,
                lastName: localStoredUser.last_name,
                email: localStoredUser.email,
                registering: false,
                loggedIn: loggedInFlag
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
