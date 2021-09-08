import axios from 'axios'

export const ADD_BILL = 'ADD_BILL'
export const asyncAddBill = (formData,resetForm) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formData,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            console.log(result)
            dispatch(addBill(result))
            resetForm()
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const addBill = (data) => {
    return {
        type : ADD_BILL,
        payload : data
    }
}