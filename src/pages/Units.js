import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullUnits from './FullUnits'
import FullExamples from './FullExamples'
import FullExercises from './FullExercises'


//import GlRequest from './graphQLUtils';

const Units = () => (
  <Switch>
    <Route exact path='/units' component={FullUnits}/>
    <Route path='/units/examples/:id' component={FullExamples}/>
    <Route path='/units/exercises/:id' component={FullExercises}/>
  </Switch>
)

export default Units
