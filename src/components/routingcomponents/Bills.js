import BillsForm from "../billcomponents/BillsForm"
import BillsList from '../billcomponents/BillsList'
const Bills = (props) => {
    return(
        <div>
            <BillsForm/>
            <BillsList/>
        </div>
    )
}

export default Bills