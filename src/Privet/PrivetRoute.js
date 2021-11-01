import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Route,
    Redirect,
  } from "react-router-dom";
import useAuth from '../hooks/useAuth';
const PrivetRoute = ({children , ...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
      // spinner for reload page 
      return < div className="text-center mt-5 pt-5"><Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /></div>
    }
    return (
        <Route
      {...rest}
      render={({location}) =>
        user.email ? (
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
};

export default PrivetRoute;