import React from 'react';
import { Route, Redirect } from 'react-router-dom';

var _user = null;

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>{ 
            if(!_user){
                _user = localStorage.getItem('user');
            }
            
            if(_user){
                return <Component {...props} user={ JSON.parse(_user)} />
            }
            else{
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
        
    }} />
);