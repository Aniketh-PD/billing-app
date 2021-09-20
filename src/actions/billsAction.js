import axios from '../config/axios-config'

export const ADD_BILL = 'ADD_BILL'
export const GET_BILLS = 'GET_BILLS'
export const REMOVE_BILL = 'REMOVE_BILL'

export const asyncAddBill = (formData,resetForm,getGeneratedBill) => {
    return (dispatch) => {
        axios.post('/bills',formData,{headers : {
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
        axios.get('/bills',{headers : {
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

//
export const asyncDeleteBill = (id) => {
    return (dispatch) => {
        axios.delete(`/bills/${id}`,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(removeBill(result))
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

export const removeBill = (data) => {
    return {
        type : REMOVE_BILL,
        payload : data
    }
}