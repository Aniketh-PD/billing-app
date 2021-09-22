import {useSelector} from 'react-redux'
import ProductItem from './ProductItem'
import '../../styles/Products.css'

const ProductsList = (props) => {
    const products = useSelector((state) => {
        return state.products
    })

    return(
        <div className="card-grid">
            {
                products.map((product) => {
                    return <ProductItem key={product._id} {...product}/>
                })
            }
        </div>
    )
}

export default ProductsList