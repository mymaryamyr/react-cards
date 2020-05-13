import React from 'react';  
import { Route, Link } from 'react-router-dom';  
import Navbar from '../Navbar';
import routes from '../../config/routes'
  

const LayoutMain = ({ children, ...rest }) => {
    return (
      <div>
        {children}
      </div>
    )
}
 
export default LayoutMain; 