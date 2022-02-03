import React from 'react';
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 5})
  }
  const getCash = () => {
    dispatch ({type: "GET_CASH", payload: 5})
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
      </div>
    </div>
  );
}

export default App;
