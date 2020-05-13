import React from 'react';  
import { Route } from 'react-router-dom';  

function LayoutLanding({ children, ...rest }) {
  return (
    <Route>
    {children}
    </Route>
  );
}

  
  
export default LayoutLanding; 