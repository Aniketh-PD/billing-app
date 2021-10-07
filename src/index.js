import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { asyncgetAccountDetails } from './actions/userAction';
import { asyncGetCustomerData } from './actions/customersActions'
import {asyncGetProducts} from './actions/productActions'
import { asyncGetBills } from './actions/billsAction'
import { userLoggedin } from './actions/userAction';


const store = configureStore()



if(localStorage.getItem('token'))
{
  store.dispatch(userLoggedin(true))
  store.dispatch(asyncgetAccountDetails())
  store.dispatch(asyncGetCustomerData())
  store.dispatch(asyncGetProducts())
  store.dispatch(asyncGetBills())
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


