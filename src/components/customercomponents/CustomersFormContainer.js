import CustomersForm from "./CustomersForm"
import { useDispatch } from "react-redux"
import {asyncAddCustomer} from '../../actions/customersActions'

const CustomersFormContainer = (props) => {
    const dispatch = useDispatch()

    const formSubmit = (formData,resetForm) => {
        dispatch(asyncAddCustomer(formData,resetForm))
    }
    
    return(
        <CustomersForm formSubmit={formSubmit}/>
    )
}

export default CustomersFormContainer