import {ADD_BILL,GET_BILLS} from '../actions/billsAction'

const billsInitialState = []
const billsReducer = (state=billsInitialState,action) => {
    switch(action.type){
        case ADD_BILL : {
            return [{...action.payload},...state]
        }
        case GET_BILLS : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default billsReducer