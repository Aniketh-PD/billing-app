import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const CustomerDialog = (props) => {
    const {open,handleClose,name,mobile,email} = props
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Customer details</DialogTitle>
            <DialogContent style={{width : '400px',height :'100px'}} >
            <hr/>
                <Typography variant="subtitle2">
                    name :  {name}
                </Typography>
                <Typography variant="subtitle2">
                    email : {email}
                </Typography>
                <Typography variant="subtitle2">
                    mobile number : {mobile}
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
export default CustomerDialog