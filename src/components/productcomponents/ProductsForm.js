import {useState} from 'react'


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
            <input type="text" value={productName} onChange={handleChange} placeholder="Product Name" name="product"/>
            {formErr.productName && <span>{formErr.productName}</span>}<br/>
            
            <input type="number" value={price} onChange={handleChange} placeholder="Price" name="price"/>
            {formErr.price && <span>{formErr.price}</span>}
            {formErr.validPrice && <span>{formErr.validPrice}</span>}<br/>

            <input type="submit" value="Add Product"/>
        </form>
    )
}

export default ProductsForm 