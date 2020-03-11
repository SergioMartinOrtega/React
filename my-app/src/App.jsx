import React from 'react';
import Header from './header/Header';
import './App.css';
import {PRODUCTS} from "./mock-products";
import ProductList from './product-list/ProductList';
import Products from './products/Products';
import ShoppingCar from './shopping-car/Shopping-car';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route exact path = "/">
          <Products/>
        </Route>
        <Route exact path = "/shoppin-car">
          <ShoppingCar/>
        </Route>
      </Switch>
      <Header/>
    </div>
    </Router>
    
  );
}

export default App;
