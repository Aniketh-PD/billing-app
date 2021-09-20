import axios from '../../config/axios-config'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useFormik} from 'formik'
import * as yup from 'yup'
import '../../styles/Register.css'



 const validationSchema = yup.object({
    username : yup.string().required('user name is required'),
    email : yup.string().email('enter a valid email').required('email is required'),
    password : yup.string().required('password is required'),
    businessName : yup.string().required('business name is required'),
    address : yup.string().required('address is required')
 })
const Register = (props) => {
    const formik = useFormik({
        initialValues : {
            username : "",
            email:"",
            password : "",
            businessName : "",
            address : ""
        },
        onSubmit : (values) => {
            axios.post('/users/register',values)
            .then((response) => {
                const registered = response.data
                if(registered.hasOwnProperty('errors'))
                {
                    alert(registered.message)
                }
                else if(registered.hasOwnProperty('errmsg'))
                {
                    alert(`Email-${values.email} is already registered.\n Please register using a new email id or\n log in using the registered email id`)
                }
                else{
                    alert('successfuly registered')
                    props.history.push('/billingapp/login')
                }

            })
            .catch((err) => {
                alert(err.message)
            })
        },
        validationSchema : validationSchema
    })
    return(
            <div>
                <form className="form-center" onSubmit={formik.handleSubmit}>
                    <TextField 
                        label="User Name"
                        name ="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText = {formik.touched.username && formik.errors.username}
                        variant="outlined"
                        margin="dense"                
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText = {formik.touched.email && formik.errors.email}
                        variant="outlined"
                        margin="dense"
                    />
                    <TextField 
                        label="Password"
                        type ="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText = {formik.touched.password && formik.errors.password}
                        variant="outlined"
                        margin="dense"
                    />

                    <TextField 
                        label="Business Name"
                        name="businessName"
                        value={formik.values.businessName}
                        onChange={formik.handleChange}
                        error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                        helperText = {formik.touched.businessName && formik.errors.businessName}
                        variant="outlined"
                        margin="dense" 
                    /> 
                    <TextField
                        label="Address"
                        multiline
                        rows={4}
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText = {formik.touched.address && formik.errors.address}
                        variant="outlined"
                        margin="dense"
                    />
                    <Button type="submit" variant="contained" color="primary">Register</Button>
                </form>
            </div>
    )
}

export default Register