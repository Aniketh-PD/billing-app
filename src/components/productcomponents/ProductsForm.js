import {useState} from 'react'
import { TextField,Button } from '@material-ui/core'


const ProductsForm = (props) => {

    const {formSubmit,name,price : editPrice} = props

    const [productName,setProductName] = useState(name ||'')
    const [price,setPrice] = useState(editPrice ||'')
    const[formErr,setFormErr] = useState({})
    const errors = {}

    const handleChange = (e) => {     
        const attr = e.target.name

        if(attr === 'product')
        {
            setProductName(e.target.value)
        }
        if(attr === 'price')
        {
            setPrice(e.target.value)
        }
    }

    const validateForm = () => {
        if(productName.length === 0)
        {
            errors.productName = 'product name cannot be blank'
        }
        if(price.length === 0)
        {
            errors.price = 'price cannot be empty'
        }
        else if(!Number(price))
        {
            errors.validPrice = 'only enter numbers for price'
        }
        setFormErr(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()

        if(Object.keys(errors).length === 0)
        {
            const resetForm = () => {
                setProductName('')
                setPrice('')
            }

            const formData = {
                name : productName,
                price : price
            }

            formSubmit(formData,resetForm)
        }

    }


    return(
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Product Name"
                name="product" 
                value={productName} 
                onChange={handleChange} 
                error={formErr.productName}
                helperText={formErr.productName}
                variant="outlined"
            /><br/>

            <TextField 
                type="number" 
                label="Price" 
                name="price" 
                value={price} 
                onChange={handleChange} 
                error={formErr.price}
                helperText={formErr.price}
                variant="outlined"  
            /><br/>
            <Button type="submit" variant="contained" color="primary">Add Product</Button>
        </form>
    )
}

export default ProductsForm 