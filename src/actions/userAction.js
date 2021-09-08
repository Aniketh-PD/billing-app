import axios from 'axios'

export const LOG_IN = 'LOG_IN'


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
                redirectToUser()
            }
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
