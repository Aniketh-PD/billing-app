import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const BillDialog = (props) => {
    const {date,customer,total,lineItems,open,handleClose,getCustomer,getProduct,products,customers} = props

    const formattedDate = (date) => {
        return new Date(date).toISOString().split('T')[0]
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle onClose={handleClose}>
                <div style={{display : 'flex'}}>
                    <Typography style={{flexGrow : '1'}}>
                    Customer Name : {getCustomer(customers,customer).name}
                    </Typography>
                    <Typography>
                        {formattedDate(date)}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent style={{width:'500px'}} dividers>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product </TableCell>
                                <TableCell align="right">Quantity </TableCell>
                                <TableCell align="right">SubTotal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                lineItems.map((lineItem) => {
                                    return (
                                        <TableRow key={lineItem._id}>
                                            <TableCell component="th" scope="row">{getProduct(products,lineItem.product).name}</TableCell>
                                            <TableCell align="right">{lineItem.quantity}</TableCell>
                                            <TableCell align="right">{lineItem.subTotal}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography>
                Total : {total}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary"> Close </Button>
                <Button onClick={handleClose} color="secondary"> Download </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BillDialog