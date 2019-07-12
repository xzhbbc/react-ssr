import React from 'react';
import {Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Login from './Component/Login/login';

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)