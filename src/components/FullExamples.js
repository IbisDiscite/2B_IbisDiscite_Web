import React from 'react'
import ApiExamples from '../apiExamples'

const FullExamples = (props) => {
  const examples = ApiExamples.getUnits( parseInt(props.match.params.id, 10));
  if(examples.length===0){
    return <div><h2>The unit does not have examples available</h2></div>
  }
  return(
    <div>
      <ul>
        {
          examples.map(p => (
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
