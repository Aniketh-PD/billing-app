import { useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import CustomerItem from './CustomerItem'
import { asyncGetCustomerData } from "../../actions/customersActions"
import '../../styles/Customers.css'

const CustomersList = (props) => {
    const dispatch = useDispatch()

    const customers = useSelector((state) => {
        return state.customers
    })

    useEffect(() => {
        dispatch(asyncGetCustomerData())
    },[])


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