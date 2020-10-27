const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
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
        .then(user => {
            console.log(user)
            dispatch(addUser(user))
        })
        // .then(user => dispatch(addUser(user)))
    }
}

export default registerUser;



