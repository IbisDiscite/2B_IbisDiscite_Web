import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ApiTodayslessons from '../apiTodayslessons'

const Todayslesson = () => {
  const lesson = ApiTodayslessons.getRandom() //get(n)
   if (!lesson) {
    return <div><h2>No lessons available at the moment </h2></div>
  }
  return (
    <div>
      <h2>{lesson.name}</h2>
      {lesson.description}
    </div>
  )
}

export default Todayslesson


/*<div>
    <ul>
      {
        ApiTodayslessons.all().map(p => (
          <div>
            <li key={p.id}>
              <h2>
              {p.name}
              </h2>
              {p.description}
            </li>
            <h2>
              {n}
            </h2>
          </div>
        ))
      }
    </ul>
  </div>
*/