import CustomersFormContainer from "../customercomponents/CustomersFormContainer"
import CustomersList from "../customercomponents/CustomersList"
import '../../styles/Customers.css'

const Customers = (props) => {
    return(
        <div className='customer-grid'>
                <CustomersList/>
            <div className='center-form'>
                <CustomersFormContainer/>
            </div>
        </div>
    )
}

export default Customers