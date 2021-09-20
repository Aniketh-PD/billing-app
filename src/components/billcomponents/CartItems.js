import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
const CartItems = (props) => {
    const {cartItems,handleDecrement,handleIncrement} = props

    const decrement = (e,id) => {
        e.preventDefault()
        handleDecrement(id)
    }
    const increment = (e,id) => {
        e.preventDefault()
        handleIncrement(id)
    }

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell></TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cartItems.map((cartItem) => {
                    return (
                        <TableRow key={cartItem.id}>
                            <TableCell>{cartItem.name}</TableCell>
                            <TableCell>
                                <IconButton disabled={cartItem.quantity <=1} onClick={(e) => {decrement(e,cartItem.id)}}>
                                    <RemoveCircleRoundedIcon color={cartItem.quantity <= 1 ? 'disabled' : 'secondary'} style={{marginTop :'10px'}}/>
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                {cartItem.quantity}
                            </TableCell>
                            <TableCell >
                                <IconButton onClick={(e) => {increment(e,cartItem.id)}}>
                                    <AddCircleIcon  color="primary" style={{marginTop :'10px'}}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default CartItems