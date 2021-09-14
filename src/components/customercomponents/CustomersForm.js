import {useState} from 'react'
import validator from 'validator'
import  Button  from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import '../../styles/Customers.css'


const CustomersForm = (props) => {
    const {formSubmit,name,mobile,email:editEmail} = props

    const [customerName,setCustomerName] = useState(name ||'')
    const [mobileNumber,setMobileNumber] = useState( mobile||'')
    const [email,setEmail] = useState(editEmail ||'')
    const[formErr,setFormErr] = useState({})
    const errors = {}

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'customer')
        {
            setCustomerName(e.target.value)
        }
        if(attr === 'mobile')
        {
            setMobileNumber(e.target.value)
        }
        if(attr === 'email')
        {
            setEmail(e.target.value)
        }
    }

    const validateForm = () => {
        if(customerName.length===0)
        {
            errors.customerName = 'customer name cannot be blank'
        }
        if(mobileNumber.length === 0)
        {
            errors.mobileNumber = 'mobile number cannot be blank'
        }
        else if(!Number(mobileNumber))
        {
            errors.validMobileNumber = 'please enter  number and not aplha numeric characters'
        }
        else if(mobileNumber.length !== 10)
        {
            errors.missingMobileNumber ='mobile number should conntain 10 numbers'
        }
        if(email.length === 0)
        {
            errors.email ='email cannnot be blank'
        }
        else if(!validator.isEmail(email))
        {
            errors.validEmail = 'please enter a valid email id'
        }
        setFormErr(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if(Object.keys(errors).length === 0)
        {
            const formData = {
                name : customerName,
                mobile : mobileNumber,
                email : email
            }
            const resetForm = () => {
                setCustomerName('')
                setMobileNumber('')
                setEmail('')
            }
            formSubmit(formData,resetForm)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    className='textfield'
                    label="Customer Name" 
                    value={customerName} 
                    onChange={handleChange} 
                    name="customer" 
                    error={formErr.customerName}
                    helperText={formErr.customerName}
                    variant="outlined"
                /><br/>

                <TextField 
                    className='textfield'
                    label="Mobile" 
                    value={mobileNumber} 
                    onChange={handleChange} 
                    name="mobile"
                    error={formErr.mobileNumber || formErr.validMobileNumber || formErr.missingMobileNumber}
                    helperText={formErr.mobileNumber || formErr.validMobileNumber || formErr.missingMobileNumber}
                    variant="outlined"
                /><br/>
                
                <TextField 
                className='textfield'
                label="Email" 
                value={email} 
                onChange={handleChange} 
                name="email"
                error={formErr.email || formErr.validEmail}
                helperText={formErr.email || formErr.validEmail}
                variant="outlined"
                /><br/>

                <Button className='add-button' type="submit" variant="contained" color="primary"> Add Customer </Button>
            </form>
        </div>
    )
}

export default CustomersForm