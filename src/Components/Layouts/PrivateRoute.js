import React from 'react';  
import { Route, Redirect } from 'react-router-dom'; 
import fakeAuth from "../Login/fakeAuth";
import PropTypes from 'prop-types';

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          (fakeAuth.isAuthenticated) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}
PrivateRoute.propTypes = {
  children: PropTypes.element
}

export default PrivateRoute;