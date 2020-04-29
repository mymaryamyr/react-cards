import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import routes from './config/routes';



function App() {
  return (
    <Router>
      <div>
        <Navbar>
            <li><Link to={routes.listing.path}>Listing</Link></li>
            <li><Link to={routes.aboutUs.path}>About Us</Link></li>
            <li><Link to={routes.landing.path}>Landing</Link></li>
            <li><Link to={routes.register.path}>Register/Logout</Link></li>
            <li><Link to={routes.basket.path}>Basket</Link></li>
        </Navbar>

        <Switch>
          <Route path={routes.listing.path} component={routes.listing.component} />
          <Route path={routes.aboutUs.path} component={routes.aboutUs.component} />
          <Route path={routes.product.path} component={routes.product.component} />
          <Route path={routes.landing.path} component={routes.landing.component} />
          <Route path={routes.register.path} component={routes.register.component} />
          <Route path={routes.basket.path} component={routes.basket.component} />
        </Switch>
      </div>
  </Router>

  );
}
export {
  Navbar,
};

export default App;