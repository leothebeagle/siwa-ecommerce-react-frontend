// const addUser = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user
//     }
// }

function addUser(user) {
    return (dispatch) => {
        fetch('http://localhost:3000/users', 
        {
          method: 'POST',  
          mode: 'no-cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }) 
        .then(resp => console.log(resp))
    }
}

export default addUser;