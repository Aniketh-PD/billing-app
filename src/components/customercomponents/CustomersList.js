import {useSelector} from 'react-redux'
import CustomerItem from './CustomerItem'
import '../../styles/Customers.css'

const CustomersList = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    })

    return(
        <div className="card-grid"> 
            {
                customers.map((customer) => {
                  return  <CustomerItem key={customer._id} {...customer}/>
                })
            }
        </div>
    )
}

export default CustomersList