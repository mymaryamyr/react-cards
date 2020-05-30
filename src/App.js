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
import Home from './Components/Home';



function App() {
  return (
    <Router>
      <Switch>

        {routes.map((route,i)=>
          <Route key={i} path={route.subRoutes.map(r=>r.path)}>
            <route.layout>
              {route.subRoutes.map((subRoute,i)=>
                <Route key={i} {...subRoute} />
              )}
            </route.layout>
          </Route>
        )}

        <Route component={Err404} />
          
      </Switch>
    </Router>
  );
}



export default App;