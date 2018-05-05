import React from 'react'
import ApiUnits from '../apis/apiUnits'
import { Link } from 'react-router-dom'

const FullUnits = () => {
  const units = ApiUnits.all();
  if(units.length===0){
    return <div><h2>No units available at the moment </h2></div>
  }
  return(
    <div>
      <ul>
        {
          units.map(p => (
            <li key={p.id}>
              <Link to={`/units/${p.id}`}>{p.nombre}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FullUnits
