import React from 'react'
import ApiUnits from '../apiUnits'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
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
