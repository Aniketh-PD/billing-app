import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText';
import CartItems from './CartItems';
import BillDialog from './BillDialog';
import { asyncAddBill } from '../../actions/billsAction'
import {getProduct} from '../../selectors/ProductSelector'

const BillsForm = (props) => {
    const dispatch = useDispatch()
    const[customerId,setCustomerId] = useState('')
    const [billDate,setBillDate] = useState('')
    const [productId,setProductId] = useState('')
    const[itemquantity,setItemQuantity] = useState('1')
    const [lineItems,setLineItems] = useState([])
    const[formErr,setFormErr] = useState({})
    const[cartItemErr,setCartItemErr] = useState({})
    const[generatedBill,setGeneratedBill] = useState({})
    const[open,setOpen] = useState(false)
    const err = {},cartErr={}

    const [customers, products] = useSelector((state) => {
        return [state.customers, state.products]
    })
 

    const handleClose = () => {
        setOpen(false);
      };



    const getCustomer = (id) => {
        const result = customers.find(customer => customer._id === id)
        return result
    }

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'customer')
        {
            setCustomerId(e.target.value)
        }
        if(attr === 'billDate')
        {
            setBillDate(e.target.value)
        }
        if(attr === 'product')
        {
            setProductId(e.target.value)
        }
        if(attr === 'itemquantity')
        {
            setItemQuantity(e.target.value)
        }
    }
    const handleDecrement = (id) => {
        const arr = lineItems.map((lineItem) => {
            if(lineItem.id === id)
            {
                return{...lineItem,quantity:Number(lineItem.quantity) - 1}
            }
            else
            {
                return{...lineItem}
            }
        })
        setLineItems(arr)
    }
    const handleIncrement = (id) => {
        const arr = lineItems.map((lineItem) => {
            if(lineItem.id === id)
            {
                return{...lineItem,
                    quantity: Number(lineItem.quantity) + 1}
            }
            else
            {
                return{...lineItem}
            }
        })
        setLineItems(arr)
    }
    const generateCartItems = (lineItems,products) => {
        const arr = []
        for(const item of lineItems)
        {
            for(const prod of products)
            {
                if(item.product === prod._id)
                {
                    const obj = {...item,name : prod.name}
                    arr.push(obj)
                }
            }
        }
        return arr
    }

    const validateCartItem = () => {
        if(productId.length === 0)
        {
            cartErr.blankProduct = 'Product name required' 
        }
        setCartItemErr(cartErr)
    }
    const validateForm = () => {
        if(billDate.length === 0)
        {
            err.blankDate = 'Date field required'
        }
        if(customerId.length === 0 )
        {
            err.blankCustomer = 'customer field required'
        }
        if(lineItems.length === 0)
        {
            err.noProduct = 'product field required'
        }
        setFormErr(err)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const newLineItems = [{id : Number(new Date()),product : productId,quantity:itemquantity},...lineItems]
        validateCartItem()
        if(Object.keys(cartErr).length === 0)
        {
            setLineItems(newLineItems)
            setProductId('')
            setItemQuantity('1')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if(Object.keys(err).length === 0)
        {
            const resetForm = () => {
                setBillDate('')
                setCustomerId('')
                setProductId('')
                setLineItems([]) 
            }
            const lineItemswithoutId = lineItems.map(({id,...rest}) => ({...rest}))
            const formData = {
                date : billDate,
                customer : customerId,
                lineItems : lineItemswithoutId
            }
            const getGeneratedBill = (billData) => {
                setGeneratedBill(billData)
                setOpen(true)
            }
            dispatch(asyncAddBill(formData,resetForm,getGeneratedBill))
        }
    }
    return(
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField
                    label='Date'
                    type='date'
                    name='billDate'
                    value={billDate}
                    onChange={handleChange} 
                    InputLabelProps={{
                        shrink:true
                    }}
                    helperText={formErr.blankDate}
                    /><br/>
                    <InputLabel>Customer</InputLabel>
                    <Select
                        native
                        id="customer"
                        value={customerId} 
                        onChange={handleChange} 
                        name="customer"        
                    >
                        <option value="">select customer</option>
                        {
                            customers.map((customer) => {
                                return <option key={customer._id} value={customer._id}>{customer.name}</option>
                            })
                        }
                    </Select>
                    <FormHelperText>{formErr.blankCustomer}</FormHelperText><br/>
                        <InputLabel>Product</InputLabel>
                        <Select
                        native
                        value={productId}
                        onChange={handleChange}
                        name="product"
                        error={Boolean(cartItemErr.blankProduct)}
                        >
                            <option value="">select product</option>
                            {
                                products.map((product) => {
                                    return <option key={product._id} value={product._id}>{product.name}</option>
                                })
                            }
                        </Select>
                        <FormHelperText>{cartItemErr.blankProduct || formErr.noProduct}</FormHelperText><br/>
                    <TextField 
                        type="number" 
                        label="Quantity" 
                        name="itemquantity" 
                        value={itemquantity} 
                        onChange={handleChange}
                    /><br/>
                    <Button onClick={handleClick}>Add Item</Button><br/>
                    {
                        lineItems.length > 0 && <CartItems cartItems={generateCartItems(lineItems,products)} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
                    } 
                    <Button type="submit">Add Bill</Button>      
                </form>
                {
                    open && <BillDialog open={open} handleClose={handleClose} getProduct={getProduct} getCustomer={getCustomer} {...generatedBill} products={products} />
                }
            </div>
    )   
}
export default BillsForm