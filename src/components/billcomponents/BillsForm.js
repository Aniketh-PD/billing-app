import {useSelector,useDispatch} from 'react-redux'
import { useEffect,useState } from 'react'
import { asyncGetCustomerData } from '../../actions/customersActions'
import {asyncGetProducts} from '../../actions/productActions'
import { asyncAddBill } from '../../actions/billsAction'

const BillsForm = (props) => {
    const dispatch = useDispatch()
    const[customerId,setCustomerId] = useState('')
    const [billDate,setBillDate] = useState('')
    const [lineItems,setLineItems] = useState([{
        product : '',
        quantity : ''
    }])

    useEffect(() => {
        dispatch(asyncGetCustomerData())
        dispatch(asyncGetProducts())
    },[])

    const customers = useSelector((state) => {
        return state.customers
    })
    const products = useSelector((state) => {
        return state.products
    })

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
    }


    const handleClick = (e) =>{
        e.preventDefault()
        const newLineItems = [...lineItems,{product :'' , quantity : ''}]
        setLineItems(newLineItems)
    }

    const handleLineItemChange = (e,index) => {
        const arr = [...lineItems]
        arr[index][e.target.name] = e.target.value
        arr[index][e.target.name] = e.target.value
        setLineItems(arr)
    }

    const handleRemove = (e,index) => {
        e.preventDefault()
        const filterLineItems = lineItems.filter((lineItem,i) =>{
            return i !== index
        })
        setLineItems(filterLineItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            date : billDate,
            customer : customerId,
            lineItems : lineItems
        }
        console.log(formData)
        const resetForm = () => {
            setCustomerId('')
            setBillDate('')
            setLineItems([{
                product : '',
                quantity : ''
            }])
        }
        dispatch(asyncAddBill(formData,resetForm))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Date</label>
            <input type="date" value={billDate} onChange={handleChange} name='billDate'/><br/>
            <label>Customer</label>
            <select value={customerId} onChange={handleChange} name="customer">
                <option value="" >select Customer</option>
                {
                    customers.map((customer) => {
                        return <option key={customer._id} value={customer._id}>{customer.name}</option>
                    })
                }
            </select><br/>
            {
                lineItems.map((lineItem,index) => {
                    return (
                        <div key={index}>
                            <label>Product</label>
                            <select value={lineItem.product} onChange={(e) => {handleLineItemChange(e,index)}} name="product">
                                    <option value=""> select product</option>
                                    {
                                        products.map((product) => {
                                            return <option key={product._id} value={product._id}>{product.name}</option>
                                        })
                                    }
                            </select><br/>
                            <label>Quantity</label>
                            <input type='number' value={lineItem.quantity} onChange={ (e) => handleLineItemChange(e,index)} name='quantity' />
                            <button onClick={ (e) => {handleRemove(e,index)}}>X</button><br/>
                        </div>
                    )
                })
            }
            <input type="submit" value="Add Bill"/>
            <button onClick={handleClick}>Add Product</button>
        </form>
    )
}
export default BillsForm