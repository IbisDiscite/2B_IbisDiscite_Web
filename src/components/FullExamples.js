import React from 'react'
import ApiExamples from '../apiExamples'


// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullExamples = () => (
  <div>
    <ul>
      {
        ApiExamples.all().map(p => (
          <li key={p.id}>
            {p.contenido}
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullExamples
