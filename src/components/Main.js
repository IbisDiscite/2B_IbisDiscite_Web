import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Units from '../pages/Units'
import Todayslesson from '../pages/Todayslesson'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/units' component={Units}/>
      <Route path='/Todayslesson' component={Todayslesson}/>

    </Switch>
  </main>
)

export default Main
