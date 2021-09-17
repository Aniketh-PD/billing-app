import {useState} from 'react'
import { useSelector } from 'react-redux'
import { TableCell, TableRow } from "@material-ui/core"
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import BillDialog from './BillDialog'

const BillItem = (props) => {
    const{_id,date,customer,total,lineItems} = props
    console.log(props)
    const[open,setOpen] = useState(false)
    
    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const handleDialogOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
      };

    const getProduct = (id) => {
        const result = products.find(prod => prod._id === id)
        return result
    }

    const getCustomer = (id) => {
        const result = customers.find(customer => customer._id === id)
        return result
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
                        handleClose={handleClose}/>
            }
                <TableCell>{date}</TableCell>
                <TableCell>{getCustomer(customer).name}</TableCell>
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