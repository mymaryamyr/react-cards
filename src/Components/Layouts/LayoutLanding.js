import React from 'react';  
import { Route } from 'react-router-dom';  

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