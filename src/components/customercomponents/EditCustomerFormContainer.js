import CustomersForm from './CustomersForm'
import { asyncEditCustomer } from '../../actions/customersActions'
import { useDispatch } from 'react-redux'

const EditCustomerFormContainer = (props) => {
    const {id,name,mobile,email,handleEdit} = props
    const dispatch = useDispatch()

    const formSubmit = (formData,resetForm) => {
        dispatch(asyncEditCustomer(id,formData,resetForm,handleEdit))
    }
    return(
        <CustomersForm name={name} mobile={mobile} email={email} formSubmit={formSubmit}/>
    )
}
export default EditCustomerFormContainer