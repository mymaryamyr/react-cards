import React from 'react';   
import PropTypes from 'prop-types';

const LayoutLanding = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}
LayoutLanding.propTypes = {
  children: PropTypes.node
}
  
export default LayoutLanding; 