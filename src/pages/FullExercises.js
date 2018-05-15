import React, { Component }  from 'react'
import GraphQLRequest from '../graphQLUtils';

class FullExercises extends Component{
  
  constructor(props){
    super(props)
    this.state = {
        dataSource: [{
          "id": 1,
          "opc1": "opc1",
          "opc2": "opc2",
          "leccion": 1,
          "enunciado": "enunciado",
          "respuesta": "rta"
        }],
        isLoading: true
    }
    
    let request = `
    query{
      allExercises{
        id
        opc1
        opc2
        leccion
        enunciado
        respuesta
      }
    }`;
    
    GraphQLRequest(request,
      data => {
        this.setState({
          isLoading: false,
          dataSource: data.allExercises
        })
      }
    );
  }
  
  
  render(props){
    if(this.state.isLoading){
      return (<h2>There are not exercises available</h2>)
    }
    return(
      <div>
      <ul>
        {
          this.state.dataSource.filter((e) => e.leccion === parseInt(this.props.match.params.id, 10)).map(p => (
            <li key={p.id}>
              <h3>{p.enunciado}</h3>
              <select name={p.enunciado}>
              <option> -- </option>
              <option>{p.opc1}</option>
              <option>{p.opc2}</option>
              </select>
              <h>{p.id}{p.enunciado}</h> 
            </li>
          ))
        }
      </ul>
      </div>
    )
  }
}

export default FullExercises;
