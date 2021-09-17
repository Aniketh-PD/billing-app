import axios from 'axios'

export const ADD_BILL = 'ADD_BILL'
export const GET_BILLS = 'GET_BILLS'

export const asyncAddBill = (formData,resetForm,getGeneratedBill) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formData,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(addBill(result))
            getGeneratedBill(result)
            resetForm()
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncGetBills = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(getBills(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}


export const addBill = (data) => {
    return {
        type : ADD_BILL,
        payload : data
    }
}

export const getBills = (data) => {
    return{
        type : GET_BILLS,
        payload : data
    }
}