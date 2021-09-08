import { ADD_CUSTOMER,GET_CUSTOMERS,EDIT_CUSTOMER,REMOVE_CUSTOMER } from "../actions/customersActions"
const customersInitialState = []

const customersReducer = (state=customersInitialState,action) => {
    switch(action.type){
        case ADD_CUSTOMER : {
            return [{...action.payload},...state]
        }
        case GET_CUSTOMERS : {
            return [...action.payload]
        }
        case EDIT_CUSTOMER : {
            return state.map((customer) => {
                if(customer._id === action.payload._id)
                {
                    return {...action.payload}
                }
                else {
                    return {...customer}
                }
            })
        }
        case REMOVE_CUSTOMER : {
            return state.filter((customer) => {
                return customer._id !== action.payload._id
            })
        }
        default :{
            return [...state]
        }
    }
}

export default customersReducer