import React, { Component }  from 'react'
import GraphQLRequest from '../graphQLUtils';
import { Card, CardTitle, CardText, CardColumns} from 'reactstrap';
class FullExamples extends Component{
  constructor(props){
    super(props)
    this.state = {
        dataSource: [{
          "id": 25,
          "unit_id": 1,
          "contenido": "Example number 0 of Grammar unit!"
        }],
        isLoading: true
    }
    
    let request = `
    query{
      allExamples{
        id
        unit_id
        contenido
      }
    }`;
    
    GraphQLRequest(request,
      data => {
        this.setState({
          isLoading: false,
          dataSource: data.allExamples
        })
      }
    );
  }
  
  render(props){
    
    if(this.state.isLoading){
      return (<h2>The unit does not have examples available</h2>)
    }
    return(
      <div>
        <CardColumns>
            {
              this.state.dataSource.filter((e) => e.unit_id === parseInt(this.props.match.params.id, 10)).map(p => (

                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle className={"text-center"}>Example {p.id} </CardTitle>
                    <CardText>{p.contenido}</CardText>
                </Card>
              ))
            }
        </CardColumns>
      </div>
    )
  }
}

export default FullExamples


/*

import ApiExamples from '../apis/apiExamples'
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
*/