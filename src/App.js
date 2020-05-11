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

import LayoutMain from './Components/Layouts/LayoutMain';
import LayoutLandingRoot from './Components/Layouts/LayoutLanding';
import Basket from './Components/Shopping/Basket/Basket';
import Yalda from './Components/Layouts/landing/Yalda';




function App(props) {
  const rootComponents = routes.map(({path, component}, key) => 
  <Route exact path={path} component={component} key={key} />)
  return (
    <Router>
        <Switch>
          <LayoutMain>
            <Navbar />
            {rootComponents}
          </LayoutMain>
          <PrivateRoute path="/basket" component={Basket} />
          <LayoutLandingRoot path={routes.find(r => r.path === "/yalda")} component={Yalda} />
        </Switch>
    </Router>
  );
}



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