import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import routes from './config/routes';
import Err404 from './Components/Layouts/404';
import PrivateRoute from './Components/Layouts/PrivateRoute';


function App() {
  return (
    <Router>
      <Switch>

        {routes.map((route,i)=>
          <Route exact key={i} path={route.subRoutes.map(r=>r.path)}>
            <route.layout>
              {route.subRoutes.map((subRoute,i)=>
                <Route key={i} {...subRoute} />
              )}
            </route.layout>
            <PrivateRoute  path="/basket"/>
          </Route>
        )}

        

        <Route component={Err404} />
          
      </Switch>
    </Router>
  );
}



export default App;