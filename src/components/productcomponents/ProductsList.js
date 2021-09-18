import {useSelector} from 'react-redux'
import ProductItem from './ProductItem'

const ProductsList = (props) => {
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