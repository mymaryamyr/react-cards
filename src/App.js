import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Listing from './Components/Shopping/Listing';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Yalda from './Components/Layouts/landing/Yalda';
import Register from './Components/Register';
import Product from './Components/Shopping/Product'
import Basket from './Components/Shopping/Basket';



function App() {
  return (
    <Router>
      <div>
        <Navbar>
            <li><Link to="/listing">Listing</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/yalda">Landing</Link></li>
            <li><Link to="/register">Register/Logout</Link></li>
            <li><Link to="/basket">Basket</Link></li>
        </Navbar>

        <Switch>
          <Route path="/listing" component={Listing} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/product/:id" component={Product} />
          <Route path="/yalda" component={Yalda} />
          <Route path="/register" component={Register} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </div>
  </Router>

  );
}
export {
  Navbar,
};

export default App;