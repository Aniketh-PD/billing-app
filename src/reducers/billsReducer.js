import {ADD_BILL} from '../actions/billsAction'

const billsInitialState = []
const billsReducer = (state=billsInitialState,action) => {
    switch(action.type){
        case ADD_BILL : {
            return [{...action.payload},...state]
        }
        default : {
            return [...state]
        }
    }
}

export default billsReducer