import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {asyncGetProducts} from '../../actions/productActions'
import ProductItem from './ProductItem'

const ProductsList = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(asyncGetProducts())        
    },[])

    const products = useSelector((state) => {
        return state.products
    })

    return(
        <div>
            {
                products.map((product) => {
                    return <ProductItem key={product._id} {...product}/>
                })
            }
        </div>
    )
}

export default ProductsList