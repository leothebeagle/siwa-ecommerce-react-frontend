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
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: user
          })
        }) 
        .then(resp => console.log(resp))
    }
}

export default addUser;



