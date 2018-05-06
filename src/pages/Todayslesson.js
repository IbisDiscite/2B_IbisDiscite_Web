import React from 'react'
import ApiTodayslessons from '../apis/apiTodayslessons'

const Todayslesson = () => {
  const lesson = ApiTodayslessons.getRandom() //get(n)
  if(!lesson) {
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