import axios from '../config/axios-config'
import {getCustomers} from './customersActions'
import {getProducts} from './productActions'
import {getBills} from './billsAction'
export const LOG_IN = 'LOG_IN'
export const SET_USER = 'SET_USER'

export const asyncUserLogin = (formData,redirectToUser) => {
    return (dispatch) => {
        axios.post(`/users/login`,formData)
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
                Promise.all([axios.get('/customers',{
                    headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}
                }), 
                axios.get('/products',{
                    headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}
                }), 
                axios.get('/bills',{
                    headers : {'Authorization' : `Bearer ${localStorage.getItem('token')}`}
                })])
                .then((values) => {
                    const [customers, products, bills] = values 
                    console.log(customers.data,'customers')
                    dispatch(asyncgetAccountDetails())
                    dispatch(getCustomers(customers.data))
                    dispatch(getProducts(products.data))
                    dispatch(getBills(bills.data))
                    redirectToUser()
                })
                .catch((err) => {
                    alert(err.message)
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
