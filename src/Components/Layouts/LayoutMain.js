import React from 'react';  
import { Route, Link } from 'react-router-dom';  
import Navbar from '../Navbar';
import routes from '../../config/routes'
  

const LayoutMain = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    )
}
 
export default LayoutMain; 