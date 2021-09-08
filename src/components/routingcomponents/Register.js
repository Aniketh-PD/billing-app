import {useState} from 'react'
import validator from 'validator'
import axios from 'axios'


const Register = (props) => {
    const [userName,setUserName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[businessName,setBusinessName] = useState('')
    const[address,setAddress] = useState('')
    const[formErr,setFormErr] = useState({})
    const errors = {}

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr==='username')
        {
            setUserName(e.target.value)
        }
        if(attr === 'email')
        {
            setEmail(e.target.value)
        }
        if(attr === 'password')
        {
            setPassword(e.target.value)
        }
        if(attr ==='businessname')
        {
            setBusinessName(e.target.value)
        }
        if(attr === 'address')
        {
            setAddress(e.target.value)
        }
    }

    const validateForm = () => {
        if(userName.length === 0)
        {
            errors.userName = 'username cannot be blank'
        }
        if(email.length === 0)
        {
            errors.email = 'email cannot be blank'
        }
        else if(!validator.isEmail(email))
        {
            errors.validEmail = 'please enter a valid email'
        }
        if(password.length === 0)
        {
            errors.password = 'password cannot be empty'
        }
        setFormErr(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if(Object.keys(errors).length === 0)
        {
            const formData = {
                username : userName,
                email : email,
                password : password,
                businessName : businessName,
                address :address
            }
            axios.post('http://dct-billing-app.herokuapp.com/api/users/register',formData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors'))
                {
                    alert(result.message)
                }
                else if(result.hasOwnProperty('errmsg'))
                {
                    alert(`Email-${email} is already registered.\n Please register using a new email id or\n log in using the registered email id`)
                }
                else{
                    alert('successfuly registered')
                    props.history.push('/billingapp/login')
                }
            })
            .catch((err) => {
                alert(err.message)
            })

        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' value={userName} onChange={handleChange} name='username' />
            {formErr.userName && <span>{formErr.userName}</span>}<br/>
            <label>Email</label>
            <input type='text' value={email}  onChange={handleChange} name='email' />
            {formErr.email && <span>{formErr.email}</span>}
            {formErr.validEmail && <span>{formErr.validEmail}</span>}<br/>
            <label>Password</label>
            <input type='password' value={password}  onChange={handleChange} name='password'/>
            {formErr.password && <span>{formErr.password}</span>}<br/>
            <label>BusinessName</label>
            <input type='text' value={businessName}  onChange={handleChange} name='businessname'/><br/>
            <label>Address</label>
            <textarea value={address}  onChange={handleChange} name='address'></textarea><br/>
            <input type='submit' value='register'/>
        </form>
    )
}

export default Register