import CustomersFormContainer from "../customercomponents/CustomersFormContainer"
import CustomersList from "../customercomponents/CustomersList"

const Customers = (props) => {
    return(
        <div>
            <CustomersFormContainer/>
            <CustomersList/>
        </div>
    )
}

export default Customers