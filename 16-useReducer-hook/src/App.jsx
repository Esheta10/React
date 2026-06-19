import React from 'react'
import { CounterWithReducer } from './CounterWithReducer'
import { ShoppingCartWithUseReducer } from './ShoppingCartWithUseReducer';
import { CounterWithInit } from '../CounterwithInit';

const App = () => {
  return (
    <div>
      {/* <CounterWithReducer/> */}
      {/* <ShoppingCartWithUseReducer/> */}
      <CounterWithInit/>
    </div>
  );
}

export default App
