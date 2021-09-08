import ProductsForm from './ProductsForm'
import {useDispatch} from 'react-redux'
import {asyncEditProduct} from '../../actions/productActions'
const EditProductsFormContainer = (props) => {
    const{id,name,price,handleEdit} = props
    const dispatch = useDispatch()

    const formSubmit = (formData,resetForm) => {
        dispatch(asyncEditProduct(id,formData,resetForm,handleEdit))
    }
    return(
        <div>
            <ProductsForm name={name} price={price} formSubmit={formSubmit}/>
        </div>
    )
}

export default EditProductsFormContainer