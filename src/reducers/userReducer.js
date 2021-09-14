import  {LOG_IN,SET_USER} from '../actions/userAction'

const userInitalState = {username : '' ,email : '',businessName : '',address : '',createdAt : '',isLoggedIn : false}

const userReducer = (state = userInitalState,action) => {
    switch(action.type) {
        case LOG_IN : {
            return {...state,isLoggedIn : action.payload}
        }
        case SET_USER : {
            return {...state,...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducer