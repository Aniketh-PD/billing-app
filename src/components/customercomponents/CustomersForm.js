import {useState} from 'react'
import validator from 'validator'


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
        <form onSubmit={handleSubmit}>
            <input type="text" value={customerName} onChange={handleChange} name="customer" placeholder="customer name" />
            {formErr.customerName&& <span>{formErr.customerName}</span>}<br/>

            <input type="text" value={mobileNumber} onChange={handleChange} name="mobile"  placeholder="mobile" />
            {formErr.mobileNumber && <span>{formErr.mobileNumber}</span>}
            {formErr.validMobileNumber && <span>{formErr.validMobileNumber}</span>}
            {formErr.missingMobileNumber && <span>{formErr.missingMobileNumber}</span>}<br/>
            
            <input type="text" value={email} onChange={handleChange} name="email" placeholder="Email"/>
            {formErr.email && <span>{formErr.email}</span>}
            {formErr.validEmail && <span>{formErr.validEmail}</span>}<br/>
            
            <input type="submit" value="Add Customer"/>
        </form>
    )
}

export default CustomersForm