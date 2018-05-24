import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FullUnits from './FullUnits'
import FullExamples from './FullExamples'
import FullExercises from './FullExercises'
import Header from '../components/Header'

var divStyle = {
    alignItems: 'center',
    padding: "25px 50px"
};
//import GlRequest from './graphQLUtils';

const Units = () => (
    <div>
        <Header/>
        <div style={divStyle}>
            <Switch>
                <Route exact path='/units' component={FullUnits}/>
                <Route path='/units/examples/:id' component={FullExamples}/>
                <Route path='/units/exercises/:id' component={FullExercises}/>
            </Switch>
        </div>
    </div>
)

export default Units
