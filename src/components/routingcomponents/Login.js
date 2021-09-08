import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncUserLogin } from '../../actions/userAction'
import validator from 'validator'

const LogIn = (props) => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
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
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='text' value={email} onChange={handleChange} name='email'/>
            {formErr.email && <span>{formErr.email}</span>}
            {formErr.validEmail && <span>{formErr.validEmail}</span>}<br/>
            <label>Password</label>
            <input type='password' value={password} onChange={handleChange} name='password'/>
            {formErr.password && <span>{formErr.password}</span>}<br/>
            <input type='submit' value='Login'/>
        </form>
    )
}

export default LogIn