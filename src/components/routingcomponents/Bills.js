import BillsForm from "../billcomponents/BillsForm"
import BillsTable from '../billcomponents/BillsTable'
import '../../styles/Bills.css'
const Bills = (props) => {
    return(
        <div className="grid-container">
            <div className="item1">
                <BillsTable/>
            </div>
            <div className="flex-item">
                <BillsForm/>
            </div>
        </div>
    )
}

export default Bills