import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Units from '../pages/Units'
import Todayslesson from '../pages/Todayslesson'
import login from './login'
import prueba from './prueba'
var divStyle = {
    alignItems: 'center',
    padding: "25px 50px"
};


const Main = () => (
  <main style={divStyle}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/units' component={Units}/>
      <Route path='/todayslesson' component={Todayslesson}/>
        <Route exact path='/login' component={login}/>
        <Route path='/prueba' component={prueba}/>
    </Switch>
  </main>
)

export default Main
