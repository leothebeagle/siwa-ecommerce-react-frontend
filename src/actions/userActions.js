// const addUser = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user
//     }
// }
// the above code is for when I was testing out actions when hooking up Redux.

function addUser(userFormData) {

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
        .then(data => console.log(data))
    }
}

export default addUser;



