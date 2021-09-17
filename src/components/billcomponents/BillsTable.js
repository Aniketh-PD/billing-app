import {useEffect} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch,useSelector } from 'react-redux'
import { asyncGetBills } from '../../actions/billsAction'
import BillItem from './BillItem'

const BillsTable = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetBills())
    },[])
    
    const bills = useSelector((state) => {
        return state.bills
    })

   return (
       <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Bill Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    {
                        bills.map((bill) => {
                            return (
                                <TableRow key={bill._id}>
                                    <BillItem {...bill} />
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                </Table>
            </TableContainer>
       </div>
   )
}

export default BillsTable 