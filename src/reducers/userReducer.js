import  {LOG_IN} from '../actions/userAction'

const userInitalState = {username : '' ,email : '',createdAt : '',isLoggedIn : false}

const userReducer = (state = userInitalState,action) => {
    switch(action.type) {
        case LOG_IN : {
            return {...state,isLoggedIn : action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducer