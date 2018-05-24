import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Header from './Header'
import Units from '../pages/Units'
import Todayslesson from '../pages/Todayslesson'
import login from './login'
var divStyle = {
    alignItems: 'center'
};


const Main = () => (
  <main style={divStyle}>
    <Switch>
      <Route exact path='/' component={login}/>
        <Route exact path='/Home' component={Home}/>
      <Route path='/units' component={Units}/>
      <Route path='/todayslesson' component={Todayslesson}/>
        <Route exact path='/login' component={login}/>
    </Switch>
  </main>
)

export default Main
