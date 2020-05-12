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
import LayoutMain from './Components/Layouts/LayoutMain';
import LayoutLandingRoot from './Components/Layouts/LayoutLanding';
import Basket from './Components/Shopping/Basket/Basket';
import LoginPage from "./Components/Login/LoginPage";
import fakeAuth from "./Components/Login/fakeAuth";
import AboutUs from './Components/AboutUs';
import Listing from './Components/Shopping/Listing';
import LayoutLanding from './Components/Layouts/LayoutLanding';
import Yalda from './Components/Layouts/landing/Yalda';



function App(props) {
  const rootComponents = routes.filter(i => i.private !== true).filter(i => i.landingLayout !== true).map(({path, component}, key) => 
    <Route exact path={path} component={component} key={key} />)
  /*
  const privateComponents = routes.filter(i => i.private == true).map(({path, component}, key) => 
    <PrivateRoute exact path={path} component={component} key={key} />)
  */
  return (
    <Router>
      <Navbar>
          <li><Link to="/listing">Listing</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/login">Register/Logout</Link></li>
          <li><Link to="/basket">Basket</Link></li>
      </Navbar>

      <Switch>
        {rootComponents}
        <LayoutLanding>
          <Yalda />
        </LayoutLanding>
        <PrivateRoute path="/basket">
          <Basket />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (fakeAuth.isAuthenticated)? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}



export default App;