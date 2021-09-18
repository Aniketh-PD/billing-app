import {useState} from 'react'
import { useSelector } from 'react-redux'
import { TableCell} from "@material-ui/core"
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import BillDialog from './BillDialog'
import { getProduct } from '../../selectors/ProductSelector';
import {getCustomer} from '../../selectors/CustomersSelector'

const BillItem = (props) => {
    const{_id,date,customer,total,lineItems} = props
    const[open,setOpen] = useState(false)
    
    const [customers,products] = useSelector((state) => {
        return [state.customers,state.products]
    })


    const handleDialogOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
      };



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
                <TableCell>{date}</TableCell>
                <TableCell>{getCustomer(customers,customer).name}</TableCell>
                <TableCell>{total}</TableCell>
                <TableCell>
                    <VisibilityIcon color="primary" onClick={handleDialogOpen}/>
                </TableCell>
                <TableCell>
                    <DeleteIcon color="secondary"/>
                </TableCell>
        </>
    )
}

export default BillItem