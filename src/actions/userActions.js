// const addUser = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user
//     }
// }

function addUser(user) {

    const { firstName, lastName, email, password, passwordConfirmation } = user;

    return (dispatch) => {
        fetch('http://localhost:3000/users', 
        {
          method: 'POST',  
          headers: {
              'Content-Type': 'application/json'
          },
        //   credentials: 'omit', we will get to this point when we want to request cookies.
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



