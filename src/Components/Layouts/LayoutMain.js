import React from 'react';  
import Navbar from '../Navbar';
import PropTypes from 'prop-types';
  
const LayoutMain = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    )
}
LayoutMain.propTypes = {
  children: PropTypes.node
}
 
export default LayoutMain; 