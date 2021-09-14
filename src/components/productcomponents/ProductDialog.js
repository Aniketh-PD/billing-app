import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const ProductDialog = (props) => {
    const{open,handleClose,name,price} = props
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Product Details
            </DialogTitle>
            <DialogContent style={{width : '400px',height :'80px'}} >
            <hr/>
            <Typography variant="subtitle2">
                Name :  {name}
            </Typography>
            <Typography variant="subtitle2">
                Price : {price}
            </Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="secondary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    )
    
}

export default ProductDialog