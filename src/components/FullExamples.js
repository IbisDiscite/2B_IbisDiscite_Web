import React from 'react'
import ApiExamples from '../apiExamples'

const FullExamples = (props) => {
  return(
    <div>
      <ul>
        {
          ApiExamples.getUnits( parseInt(props.match.params.id, 10)).map(p => (
            <li key={p.id}>
              {p.contenido}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default FullExamples
