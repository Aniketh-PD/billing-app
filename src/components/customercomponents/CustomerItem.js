import {useState} from 'react'
import { useDispatch } from 'react-redux'
import EditCustomerFormContainer from './EditCustomerFormContainer'
import { asyncRemoveCustomer } from '../../actions/customersActions'

const CustomerItem = (props) => {
    const{_id,name,mobile,email} =props

    const dispatch= useDispatch()
    const [toggle,setToggle] = useState(false)

    const handleEdit = () => {
        setToggle(!toggle)
    }

    const handleRemove = () => {
        const confirmVal = window.confirm('are you sure you want to remove this ?')
        if(confirmVal)
        {
            dispatch(asyncRemoveCustomer(_id))
        }
    }

    return(
        <div>
        {
            toggle ?  (
                <div>
                    <EditCustomerFormContainer id={_id} name={name} mobile={mobile} email={email} handleEdit={handleEdit}/>
                    <button onClick={handleEdit}>close</button>
                </div>
            ) : (
                <div>
                    <p>{name}</p>
                    <p>{mobile}</p>
                    <p>{email}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick ={ handleRemove}>remove</button>
                </div>
            )
        }
        </div>
 
    )
}

export default CustomerItem