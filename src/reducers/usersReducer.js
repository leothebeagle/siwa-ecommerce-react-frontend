export default function usersReducer(state={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: ''  
}, action) {

    // const {
    //     firstName, 
    //     lastName, 
    //     email,
    //     password,
    //     passwordConfirmation
    // } = action.payload;

    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
                passwordConfirmation: action.payload.passwordConfirmation
            }
        default: 
            return state;
    }
};