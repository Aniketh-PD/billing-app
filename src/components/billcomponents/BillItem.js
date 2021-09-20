import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { TableCell} from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import BillDialog from './BillDialog'
import { asyncDeleteBill } from '../../actions/billsAction';
import { getProduct } from '../../selectors/ProductSelector';
import {getCustomer} from '../../selectors/CustomersSelector'

const BillItem = (props) => {
    const{_id,date,customer,total,lineItems} = props
    const[open,setOpen] = useState(false)
    const dispatch = useDispatch()
    const [customers,products] = useSelector((state) => {
        return [state.customers,state.products]
    })

    const handleDialogOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
      };
    const handleRemove = () => {
        const confirmVal = window.confirm('Are you sure you want to delete this?')
        if(confirmVal)
        {
            dispatch(asyncDeleteBill(_id))
        }
    }

    const formattedDate = (date) => {
        return new Date(date).toISOString().split('T')[0]
    }

    return(
        <>
            {
                open && <BillDialog date={date} 
                        customer={customer} 
                        total={total} 
                        lineItems={lineItems} 
                        getProduct={getProduct} 
                        getCustomer ={getCustomer} 
                        open={open} 
                        handleClose={handleClose}
                        products={products}
                        customers={customers}/>
            }
                <TableCell>{formattedDate(date)}</TableCell>
                <TableCell>{getCustomer(customers,customer).name}</TableCell>
                <TableCell>{total}</TableCell>
                <TableCell>
                    <IconButton onClick={handleDialogOpen}>
                        <VisibilityIcon color="primary" />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton onClick={handleRemove}>
                        <DeleteIcon color="secondary" />
                    </IconButton>
                </TableCell>
        </>
    )
}

export default BillItem