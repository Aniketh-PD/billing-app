import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { asyncGetBills } from '../../actions/billsAction'
const BillsList = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetBills())
    },[])
    
    const bills = useSelector((state) => {
        return state.bills
    })

    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const addPropsToBills = (bills) => {
        let newLineItems = [],finalBillsArr=[]
        let obj={},obj2 ={}
        for(const bill of bills) 
        {
            for(const prod of products)
            {
                for(const lineItem of bill.lineItems )
                if( prod._id ===  lineItem.product)
                {
                    obj2 = {...lineItem,productName : prod.name}
                }
                /*bill.lineItems.map(b => {
                    if(b.product === prod._id)
                    {
                        return {...b,productName : prod.name}
                    }
                })*/
            }
            newLineItems.push(obj2)
            for(const cust of customers)
            {
                if(bill.customer === cust._id)
                {
                    obj = {...bill,lineItems :newLineItems,customerName : cust.name}
                }
            }
            finalBillsArr.push(obj)
        }
        return finalBillsArr
    }
   return (
       <div>
           Bills Table
       </div>
   )
}

export default BillsList 