import BillsForm from "../billcomponents/BillsForm"
import BillsTable from '../billcomponents/BillsTable'
const Bills = (props) => {
    return(
        <div>
            <BillsForm/>
            <BillsTable/>
        </div>
    )
}

export default Bills