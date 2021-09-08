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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <div className="navbar-nav">
                    <div className ="d-flex flex-row">
                                {
                                    isLoggedIn ? (
                                        <>
                                            <Link className="navbar-brand active" to="/billingapp/user">User</Link>
                                            <Link className="nav-link" to="/billingapp/customers">Customers</Link>
                                            <Link className="nav-link" to="/billingapp/products">Products</Link>
                                            <Link className="nav-link" to="/billingapp/bills">Bills</Link>
                                            <Link className="nav-link" to="#" onClick={handleClick}>Logout</Link>
                                        </>
                                    ) : (
                                        <>
                                                <Link className="me-auto navbar-brand active" to='/'>P.O.S</Link>
                                                <Link className="nav-link" to='/billingapp/register'>Register</Link>
                                                <Link className="nav-link" to='/billingapp/login'>Login</Link> 
                                            
                                        </>
                                    )
                                }
                        </div>
                    </div>
                </div>
            </nav>
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