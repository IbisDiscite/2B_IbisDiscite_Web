import React from 'react'
import ApiUnits from '../apiUnits'
import { Link } from 'react-router-dom'

const FullUnits = () => (
  <div>
    <ul>
      {
        ApiUnits.all().map(p => (
          <li key={p.id}>
            <Link to={`/units/${p.nombre}`}>{p.nombre}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullUnits
