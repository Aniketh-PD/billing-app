import {ADD_BILL,GET_BILLS,REMOVE_BILL} from '../actions/billsAction'

const billsInitialState = []
const billsReducer = (state=billsInitialState,action) => {
    switch(action.type){
        case ADD_BILL : {
            return [{...action.payload},...state]
        }
        case GET_BILLS : {
            return [...action.payload]
        }
        case REMOVE_BILL : {
            return state.filter((bill) => {
                return bill._id !== action.payload._id
            })
        }
        default : {
            return [...state]
        }
    }
}

export default billsReducer