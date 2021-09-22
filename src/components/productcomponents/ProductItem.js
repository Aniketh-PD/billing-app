import {useDispatch} from 'react-redux'
import {useState} from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EditProductsFormContainer from './EditProductsFormContainer'
import ProductDialog from './ProductDialog';
import { asyncDeleteProduct } from '../../actions/productActions'
import '../../styles/Products.css'



const ProductItem = (props) => {
    const dispatch = useDispatch()
    const [toggle,setToggle] = useState(false)
    const [open, setOpen] = useState(false);
    const {_id,name,price} = props

    // for dialog box
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    // for form reusability
    const handleEdit = () => {
        setToggle(!toggle)
    }

    const handleDelete = () => {
        const confirmVal = window.confirm('are you sure you want to delete the selected product?')
        if (confirmVal)
        {
           dispatch(asyncDeleteProduct(_id))
        }
    }

    return(
        <div>
            {
                toggle ?  (
                    <div>
                        <EditProductsFormContainer name={name} price={price} id={_id} handleEdit={handleEdit}/>
                        <Button className="close-button" color="secondary" variant="contained" onClick={handleEdit}>close</Button>
                    </div>
                ) : (
                    <div>
                        {
                            open && <ProductDialog open={open} handleClose={handleClose} name={name} price={price}/>
                        }
                        <Card>
                            <CardContent className="card-size">
                                <Typography>
                                    {name}
                                </Typography>
                                <Typography>
                                    {price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={handleClickOpen} variant="contained" color="primary" size="small">view</Button>
                                <Button onClick={handleEdit} variant="contained" color="primary" size="small">edit</Button>
                                <Button onClick={handleDelete} variant="contained" color="secondary" size="small">delete</Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
           
        </div>
    )
}

export default ProductItem