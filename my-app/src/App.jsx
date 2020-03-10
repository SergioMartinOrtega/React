import React from 'react';
import Header from './header/Header';
import './App.css';
import {PRODUCTS} from "./mock-products";
import ProductList from './product-list/ProductList'

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList products = {PRODUCTS} />
    </div>
  );
}

export default App;
