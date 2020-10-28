const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

const userLogoutAction = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

function registerUser(userFormData) {

    const { firstName, lastName, email, password, passwordConfirmation } = userFormData;
    
    return (dispatch) => {
        
        dispatch( { type: 'REGISTERING_USER'});

        fetch('http://localhost:3000/users', 
        {
          method: 'POST', 
          credentials: 'include', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  first_name: firstName,
                  last_name: lastName,
                  email: email,
                  password: password,
                  password_confirmation: passwordConfirmation
              }
          }),
        }) 
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            if(resp.logged_in === true) {
                dispatch(addUser(resp))
            }
        })
        // .then(user => dispatch(addUser(user)))
    }
}

function logoutUser() {
    return (dispatch) => {
        fetch('http://localhost:3000/logout', 
        {
          method: 'DELETE', 
          credentials: 'include', 
          headers: {
              'Content-Type': 'application/json'
          }
        })
        .then(response => dispatch(userLogoutAction))
    }
}

export default { registerUser, logoutUser };



