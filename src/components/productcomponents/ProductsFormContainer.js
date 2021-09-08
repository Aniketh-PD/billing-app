import ProductsForm from './ProductsForm'
import {useDispatch} from 'react-redux'
import {asyncAddProduct} from '../../actions/productActions'

const ProductsFormContainer = (props) => {
    const dispatch = useDispatch()

    const formSubmit = (formData,resetForm) => {
        dispatch(asyncAddProduct(formData,resetForm))
    }
    return (
        <ProductsForm formSubmit={formSubmit}/>
    )
} 

export default ProductsFormContainer