import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

import CustomerInfo from '../CustomerInfo/CustomerInfo';
import PizzaList from '../PizzaList/PizzaList';
import Checkout from '../Checkout/Checkout'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
    <Router>
      <Route path='/custinfo'>
        <CustomerInfo />
      </Route>
      <Route path="/selectpizza" exact>
        <PizzaList />
      </Route>
      <Route path='/checkout'>
        <Checkout />
      </Route>
     </Router>
    </div>
  );
}

export default App;
