import React, {Component} from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import {Login} from './account/Login';
import {Home} from './landing/Home';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {PrivateRoute} from './app/PrivateRoute';
import ManageUser from './account/ManageUser';
import OrderList from './order/OrderList';
import ViewOrder from './order/ViewOrder';
import CreateOrder from './order/CreateOrder';

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path='/' component={Home}/>
                    <PrivateRoute exact path='/manageUser' component={ManageUser}/>
                    <PrivateRoute exact path='/order' component={OrderList}/>
                    <PrivateRoute exact path='/order/create' component={CreateOrder} user={{name:'phong'}}/>
                    <PrivateRoute path='/order/view/:id' component={ViewOrder}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;