import {useDispatch} from 'react-redux'
import {useState} from 'react'
import EditProductsFormContainer from './EditProductsFormContainer'
import { asyncDeleteProduct } from '../../actions/productActions'



const ProductItem = (props) => {
    const dispatch = useDispatch()
    const [toggle,setToggle] = useState(false)
    const {_id,name,price} = props

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
                        <button onClick={handleEdit}>close</button>
                    </div>
                ) : (
                    <div>
                        <p>{name}</p>
                        <h2>{price}</h2>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )
            }
           
        </div>
    )
}

export default ProductItem