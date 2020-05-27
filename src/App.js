import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import routes from './config/routes';
import LayoutMain from './Components/Layouts/LayoutMain';
import Basket from './Components/Shopping/Basket/Basket';
import LayoutLanding from './Components/Layouts/LayoutLanding';
import Product from './Components/Shopping/Product';
import AboutUs from './Components/AboutUs'
import Yalda from './Components/Layouts/landing/Yalda';
import Listing from './Components/Shopping/Listing';
import PrivateRoute from './Components/Layouts/PrivateRoute';
import Err404 from './Components/Layouts/404';
import LoginPage from './Components/Login/LoginPage';



function App() {
  return (
    <Router>
      <Switch>
          <PrivateRoute path="/basket">
            <Basket />
          </PrivateRoute>        
          <Route path={["/listing", "/about-us", "/product/:id", "/login"]}>
            <LayoutMain>
            <Route exact path="/listing" component={Listing} layout={LayoutMain} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/login" component={LoginPage} />
            </LayoutMain>
          </Route>
          <Route exact path="/yalda" component={Yalda} />
          <Route component={Err404} />
      </Switch>
    </Router>
  );
}



export default App;