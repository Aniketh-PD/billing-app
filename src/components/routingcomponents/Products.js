import ProductsFormContainer from '../productcomponents/ProductsFormContainer'
import ProductsList from '../productcomponents/ProductsList'
import '../../styles/Products.css'
const Products = (props) => {
    return(
        <div className="product-grid">
            <ProductsList/>
            <div className="center-form">
                <ProductsFormContainer/>
            </div>
        </div>
    )
}

export default Products