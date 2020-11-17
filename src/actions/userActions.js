import { updateCart } from './cartActions'

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
        // ditch the payload and argument
    }
}

const userLogoutAction = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

export const registerUser = (userFormData) => {

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
                localStorage.setItem("user", JSON.stringify(resp.user))
                localStorage.setItem("cart", JSON.stringify(resp.cart))
                localStorage.setItem("loggedIn", JSON.stringify(resp.logged_in))
                dispatch(addUser(resp))
                dispatch(updateCart(resp.cart))
                // we may want to dispatch an action to the carts reducer to add a new cart
                // you want the cart id. (logging in will be different)
            }
        })
    }
}

export const loginUser = (userCredentials) => {

    const { email, password } = userCredentials;
    
    return (dispatch) => {

        fetch('http://localhost:3000/login', 
        {
          method: 'POST', 
          credentials: 'include', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  email: email,
                  password: password
              }
          })
        }) 
        .then(resp => resp.json())
        .then(resp => {
            if(resp.logged_in === true) {
                // {logged_in: true, user: {…}, cart: {…}}
                //     cart: {id: 39, items: Array(6), total: 492}
                //     logged_in: true
                //     user: {id: 2, first_name: "Lorenzo", last_name: "Medici", email: "lorenzo@medici.com", password_digest: "$2a$12$bjTOrU/JL2ZA0wDpvM71deIexdzSJoATMF.f6jzviuIt9FVjbXU3a", …}
                //     __proto__: Object
                // store data in localStorage
                console.log(resp)
                localStorage.setItem("user", JSON.stringify(resp.user))
                localStorage.setItem("cart", JSON.stringify(resp.cart))
                localStorage.setItem("loggedIn", JSON.stringify(resp.logged_in))

                dispatch(addUser(resp));
                dispatch(updateCart(resp));
                // ditch argument in response. will be updating the localStorage with data, 
                // and state will be pulling it from there.
            }
        })
        // .then(user => dispatch(addUser(user)))
    }
}

export const logoutUser = () => {

    return (dispatch) => {

        fetch('http://localhost:3000/logout', 
        {
            method: 'DELETE', 
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(resp => resp.json())
        .then(res => {
            localStorage.setItem("user", JSON.stringify({id: "", first_name: "", last_name: "", email: ""}))
            localStorage.setItem("loggedIn", "false")
            localStorage.setItem("cart", JSON.stringify({id: "", items: [], total: 0}))

            dispatch(updateCart());
            dispatch(addUser());
        })
    }
}





