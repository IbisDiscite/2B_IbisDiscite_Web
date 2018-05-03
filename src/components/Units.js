import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullUnits from './FullUnits'
import FullExamples from './FullExamples'

//import GlRequest from './graphQLUtils';

const Units = () => (
  <Switch>
    <Route exact path='/units' component={FullUnits}/>
    <Route path='/units/:id' component={FullExamples}/>
  </Switch>
)

export default Units
