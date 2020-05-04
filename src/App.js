import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar';
import routes from './config/routes';
import LoginPage from "./Components/Login/LoginPage"

import fakeAuth from "./Components/Login/fakeAuth"

import LayoutMainRoot from './Components/Layouts/LayoutMain';
import LayoutLandingRoot from './Components/Layouts/LayoutLanding';




function App(props) {
  return (
    <Router>
        <Switch>
            <LayoutMainRoot path={routes.listing.path} component={routes.listing.component} />
            <LayoutMainRoot exact path={routes.home.path} component={routes.home.component} />
            <LayoutMainRoot path={routes.aboutUs.path} component={routes.aboutUs.component} />
            <LayoutMainRoot path={routes.product.path} component={routes.product.component} />
            <LayoutMainRoot path={routes.register.path} component={routes.register.component} />
            <LayoutMainRoot path={routes.login.path} component={routes.login.component} />
            <PrivateRoute path={routes.basket.path} component={routes.basket.component} />
            <LayoutLandingRoot path={routes.landing.path} component={routes.landing.component} />
        </Switch>
    </Router>
  );
}
export {
  Navbar,
};


const PrivateRoute = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ?
              <Component {...props} />   
          : <Redirect to="/login" />
      )} />
  );
};



export default App;