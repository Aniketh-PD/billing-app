import { useEffect } from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import Home from './Home'
import Register from './Register'
import LogIn from './Login'
import User from './User'
import Customers from './Customers'
import Products from './Products'
import Bills from './Bills'
import {userLoggedin} from '../../actions/userAction'


const Navbar = (props) => {
    const isLoggedIn = useSelector((state) => {
        return state.userInfo.isLoggedIn
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token'))
        {
            dispatch(userLoggedin(true))
        }
    },[])

    const handleClick = () => {
        localStorage.removeItem('token')
        props.history.push('/')
        dispatch(userLoggedin(false))
    }

    return(
        <div>
            {
                isLoggedIn ? (
                    <>
                        <Link to="/billingapp/user">User</Link>
                        <Link to="/billingapp/customers">Customers</Link>
                        <Link to="/billingapp/products">Products</Link>
                        <Link to="/billingapp/bills">Bills</Link>
                        <Link to="#" onClick={handleClick}>Logout</Link>
                    </>
                ) : (
                    <>
                            <Link to='/'>Home</Link>
                            <Link to='/billingapp/register'>Register</Link>
                            <Link to='/billingapp/login'>Login</Link> 
                        
                    </>
                )
            }

            <Route path="/" exact={true} component={Home}/>
            <Route path="/billingapp/register" component={Register}/>
            <Route path="/billingapp/login" component={LogIn}/>
            <Route path="/billingapp/user" component={User}/>
            <Route path='/billingapp/customers' component={Customers}/>
            <Route path="/billingapp/products" component={Products}/>
            <Route path="/billingapp/bills" component={Bills}/>
        </div>
    )
}

export default withRouter(Navbar)