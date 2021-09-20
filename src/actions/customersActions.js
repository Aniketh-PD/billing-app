import axios from '../config/axios-config'

export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const GET_CUSTOMERS = 'GET_CUSTOMERS'
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const asyncAddCustomer = (formData,resetForm) => {
    return (dispatch) => {
        axios.post('/customers',formData,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(addCustomer(result))
            resetForm()
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncGetCustomerData = () => {
    return (dispatch) => {
        axios.get('/customers',{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(getCustomers(result))
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncEditCustomer = (id,formData,resetForm,handleEdit) => {
    return (dispatch) => {
        axios.put(`/customers/${id}`,formData,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(editCustomer(result))
            resetForm()
            handleEdit()
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncRemoveCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`/customers/${id}`,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {

                const result = response.data
                dispatch(removeCustomer(result))
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const getCustomers = (data) => {
    return {
        type : GET_CUSTOMERS,
        payload : data
    }
}
export const addCustomer = (data) => {
    return {
        type : ADD_CUSTOMER,
        payload : data
    }
}

export const editCustomer = (data) => {
    return {
        type : EDIT_CUSTOMER,
        payload : data
    }
}

export const removeCustomer = (data) => {
    return {
        type : REMOVE_CUSTOMER,
        payload : data
    }
}