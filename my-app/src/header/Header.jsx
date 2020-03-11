import React from 'react';
import './Header.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <header>
            
            <div>
            Bootcamp Ecommerce
            </div>
        
        <Router>
      <div>
            <Link to="/">
            <i className="material-icons">
            menu
            </i>
            </Link>
            <Link to="/shopping-car">
            <i className="material-icons">
            shopping_cart
            </i>
            </Link>
        </div>
        </Router>
        </header>
    )
};

export default Header;