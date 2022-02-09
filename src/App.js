import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchCustomers } from './asyncActions/fetchCustomers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 5})
  }
  const getCash = () => {
    dispatch ({type: "GET_CASH", payload: 5})
  }
  const addCustomer = (name) => {
    const customer = {
      id: uuidv4(),
      name,
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>
        <button
          type='button'
          onClick={addCash}
          >Пополнить счет
        </button>
          <div>{cash}</div>
        <button 
          type='button'
          onClick={getCash}
          >Снять со счета
        </button>
        <button 
          type='button'
          onClick={() => addCustomer(prompt())}
          >Добавить клиента
        </button>
        <button 
          type='button'
          onClick={() => dispatch(fetchCustomers())}
          >Добавить клиентов из базы
        </button>
  
        </div>
        {customers.length > 0 ?
          <div>
            {customers.map(customer =>
              <div style={{fontSize:'2rem', border: `black 1px solid`, padding:'15px'}}
                key={customer.id}
                onClick={()=> removeCustomer(customer)}
              >
                {customer.name}
              </div>
              )}
          </div>
          : 
          <div style={{fontSize:'2rem', marginTop:15}}>
            Клиентов нет!
          </div>
      }
    </div>
  );
}

export default App;
