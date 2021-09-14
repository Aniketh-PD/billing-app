import {useState} from 'react'
import { useDispatch } from 'react-redux'
import  Button  from '@material-ui/core/Button'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CustomerDialog from './CustomerDialog';
import EditCustomerFormContainer from './EditCustomerFormContainer'
import { asyncRemoveCustomer } from '../../actions/customersActions'
import '../../styles/Customers.css'

const CustomerItem = (props) => {
    const{_id,name,mobile,email} =props

    const dispatch= useDispatch()

    const [toggle,setToggle] = useState(false)

    const [open, setOpen] = useState(false);
    // for dialog box
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //for reusing form
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
                    <Button className='close-btn' color="secondary" variant="contained" onClick={handleEdit}>close</Button>
                </div>
            ) : (
                <div>
                    {
                        open && <CustomerDialog open={open} handleClose={handleClose} name={name} email={email} mobile={mobile} />
                    }
                    <Card>
                        <CardContent className="card-size">
                            <Typography gutterBottom>
                                {name}
                            </Typography>
                            <Typography  gutterBottom>
                                {mobile}
                            </Typography>
                            <Typography  gutterBottom>
                                {email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={handleClickOpen} color="primary" variant="contained" >View</Button> 
                            <Button size="small" onClick={handleEdit} color="primary" variant="contained" >Edit</Button>
                            <Button size="small" onClick={handleRemove} color="secondary" variant="contained" >Delete</Button> 
                        </CardActions>
                    </Card>
                </div>
            )
        }
        </div>
 
    )
}

export default CustomerItem