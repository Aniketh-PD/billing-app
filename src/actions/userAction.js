import axios from 'axios'

export const LOG_IN = 'LOG_IN'
export const SET_USER = 'SET_USER'

export const asyncUserLogin = (formData,redirectToUser) => {
    return (dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/users/login`,formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors'))
            {
                alert(result.errors)
            }
            else
            {
                alert(`logged in `)
                dispatch(userLoggedin(true))
                localStorage.setItem('token',result.token)
                Promise.all([axios.get(''), axios.get(''), axios.get('')]).then((values) => {
                    const [customers, products, bills] = values 
                    // dispatch 
                     redirectToUser()
                })
                .catch(() => {
                  
                })
               
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncgetAccountDetails = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{headers : {
            'Authorization' :  `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(userDetails(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const userLoggedin = (bool) => {
    return{
        type : LOG_IN,
        payload : bool
    }
}

export const userDetails = (data) => {
    return {
        type :  SET_USER,
        payload : {...data,isLoggedIn : true}
    }
}
