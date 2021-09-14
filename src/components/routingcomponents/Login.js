import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncUserLogin } from '../../actions/userAction'
import validator from 'validator'
import  Button  from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import '../../styles/Login.css'

const LogIn = (props) => {
    const[email,setEmail] = useState('mahesh@gmail.com')
    const[password,setPassword] = useState('mahesh24')
    const[formErr,setFormErr] = useState('')

    const dispatch = useDispatch()

    const errors = {}

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'email')
        {
            setEmail(e.target.value)
        }
        if(attr === 'password')
        {
            setPassword(e.target.value)
        }
    }
    const validateForm = () => {
        if(email.length === 0)
        {
            errors.email = 'email cannot be blank'
        }
        else if (!validator.isEmail(email)) 
        {
            errors.validEmail = 'please enter a valid email'
        }
        if(password.length === 0)
        {
            errors.password = 'password cannot be blank'
        }
        setFormErr(errors)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm() 
        const redirectToUser = () => {
            props.history.push('/billingapp/user')
        }
        if(Object.keys(errors).length === 0 )
        {
            const formData ={
                email,
                password
            }
            dispatch(asyncUserLogin(formData,redirectToUser))
        }
    }

    return(
        <form className='form-center' onSubmit={handleSubmit}>
            <TextField 
                label = 'Email'
                value={email} 
                onChange={handleChange} 
                name='email'
                error={formErr.email || formErr.validEmail}
                helperText={formErr.email || formErr.validEmail}
                variant="outlined"
                margin="dense"
            /><br/>
            <TextField
                label ='Password'
                type="password"
                value={password}
                onChange={handleChange}
                name='password'
                error={formErr.password}
                helperText={formErr.password}
                variant='outlined'
                margin='dense'
            /><br/>
            <Button type="submit" variant="contained" color="primary"> Login </Button>
        </form>
    )
}

export default LogIn