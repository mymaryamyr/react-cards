import React, { Component } from 'react';  
import { Route, Link } from 'react-router-dom';  
import { Navbar } from '../../App';
import routes from '../../config/routes'
  

const LayoutMain = ({ children, ...rest }) => {
    return (
      <div>
        <Navbar>
            <li><Link to={routes.listing.path}>Listing</Link></li>
            <li><Link to={routes.aboutUs.path}>About Us</Link></li>
            <li><Link to={routes.register.path}>Register/Logout</Link></li>
            <li><Link to={routes.basket.path}>Basket</Link></li>
        </Navbar>
        {children}
      </div>
    )
}
const LayoutMainRoot = ({ component: Component, ...rest }) => {
    console.log("Main Layout");
   
    return (
      <Route {...rest} render={matchProps => (
        <LayoutMain>
          <Component {...matchProps} />
        </LayoutMain>
      )} />
    )
};
 
export default LayoutMainRoot; 