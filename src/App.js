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
import LayoutMain from './Components/Layouts/LayoutMain';
import Basket from './Components/Shopping/Basket/Basket';
import LayoutLanding from './Components/Layouts/LayoutLanding';
import Yalda from './Components/Layouts/landing/Yalda';
import PrivateRoute from './Components/Layouts/PrivateRoute'



function App() {
  const rootComponents = routes.filter(i => i.private !== true).filter(i => i.landingLayout !== true).map(({path, component}, key) => 
    <Route exact path={path} component={component} key={key} />)
  const landingComponents = routes.filter(i => i.landing === true).map(({path, component}, key) => 
    <Route exact path={path} component={component} key={key} />)
  /*
  const privateComponents = routes.filter(i => i.private == true).map(({path, component}, key) => 
    <PrivateRoute exact path={path} component={component} key={key} />)
  */
  return (
    <Router>
      <Switch>
        <LayoutMain>
          <Navbar />       
          {rootComponents}
          <PrivateRoute path="/basket">
            <Basket />
          </PrivateRoute>
        </LayoutMain>
        {landingComponents}
      </Switch>
    </Router>
  );
}



export default App;