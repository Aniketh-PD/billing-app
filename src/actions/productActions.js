import axios from '../config/axios-config'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS' 
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const asyncAddProduct = (formData,resetForm) => {
    return (dispatch) => {
        axios.post('/products',formData,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors'))
            {
                alert(result.message)
            }
            else {
                dispatch(addProduct(result))
                resetForm()
            }
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncGetProducts = () => {
    return (dispatch) => {
        axios.get('/products',{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(getProducts(result))
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncEditProduct = (id,formData,resetForm,handleEdit) => {
    return (dispatch) => {
        axios.put(`/products/${id}`,formData,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(editProduct(result))
            resetForm()
            handleEdit()
            
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const asyncDeleteProduct = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`,{headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }})
        .then((response) => {
            const result = response.data
            dispatch(deleteProduct(result))
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

const addProduct = (data) => {
    return {
        type : ADD_PRODUCT,
        payload : data
    }
}

export const getProducts = (data) => {
    return{
        type : GET_PRODUCTS,
        payload : data
    }
}

export const editProduct = (data) => {
    return {
        type : EDIT_PRODUCT,
        payload :data
    }
}

export const deleteProduct = (data) => {
    return {
        type : DELETE_PRODUCT,
        payload : data
    }
}