import {ADD_PRODUCT,GET_PRODUCTS,EDIT_PRODUCT,DELETE_PRODUCT} from '../actions/productActions'

const productsInitialState = []

const producteReducer = (state = productsInitialState,action) => {
    switch(action.type){
        case ADD_PRODUCT : {
            return [{...action.payload},...state]
        }
        case GET_PRODUCTS : {
            return [...action.payload]
        }
        case EDIT_PRODUCT : {
            return state.map((product) => {
                if(product._id === action.payload._id)
                {
                    return {...action.payload}
                }
                else
                {
                    return {...product}
                }
            })
        }
        case DELETE_PRODUCT : {
            return state.filter((product) => {
                return product._id !== action.payload._id
            })
        }
        default : {
            return [...state]
        }
    }
}

export default producteReducer