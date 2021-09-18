import {Link,Route,withRouter} from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Home from './Home'
import Register from './Register'
import LogIn from './Login'
import User from './User'
import Customers from './Customers'
import Products from './Products'
import Bills from './Bills'
import {userLoggedin} from '../../actions/userAction'

const linkStyles = {
    textDecoration : 'none',
    color : 'white'
}

const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
  }));
  

const Navbar = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => {
        return state.userInfo.isLoggedIn
    })

    const handleClick = () => {
        localStorage.removeItem('token')
        props.history.push('/')
        dispatch(userLoggedin(false))
    }

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    {
                        isLoggedIn ? (
                            <>
                                <Button color="inherit">
                                    <Link style={linkStyles} to="/billingapp/user">User</Link>
                                </Button>
                                <Button color="inherit">
                                    <Link style={linkStyles} to="/billingapp/customers">Customers</Link>
                                </Button>
                                <Button color="inherit">
                                    <Link  style={linkStyles} to="/billingapp/products">Products</Link>
                                </Button>
                                <Button color="inherit">
                                    <Link style={linkStyles} to="/billingapp/bills">Bills</Link>
                                </Button>
                                <Button color="inherit">
                                    <Link style={linkStyles} to="#" onClick={handleClick}>Logout</Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Typography variant="h6" className={classes.title}>
                                    <Link style={linkStyles} to='/'>Home</Link>
                                </Typography>
                                <Button color="inherit">
                                    <Link style={linkStyles} to='/billingapp/register'>Register</Link>
                                </Button>
                                <Button color ="inherit">
                                    <Link style={linkStyles} to='/billingapp/login'>Login</Link> 
                                </Button>
                                
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>

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