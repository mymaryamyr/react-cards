import React, { Component } from 'react';  
import { Route, Link } from 'react-router-dom';  
import routes from '../../config/routes'
import { Navbar } from '../../App';
  

const LayoutLanding = ({ children }) => (                         
    <div>
        {children}                                       
    </div>  
);   
const LayoutLandingRoot = ({ component: Component, ...rest }) => {
    console.log("Landing Layout");
   
    return (
      <Route {...rest} render={matchProps => (
        <LayoutLanding>
          <Component {...matchProps} />
        </LayoutLanding>
      )} />
    )
};
  
export default LayoutLandingRoot; 