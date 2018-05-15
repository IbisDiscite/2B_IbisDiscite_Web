import React, { Component }  from 'react'
import GraphQLRequest from '../graphQLUtils';

class FullExercises extends Component{
  
  constructor(props){
    super(props)
    this.state = {
        isLoading: 1
    }
    
    let request = `
    query{
      exerciseByLeccion(leccion: ${this.props.match.params.id}){
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
        if (data.exerciseByLeccion.length === 0){
          this.setState({isLoading: 2})
        }
        else{
          this.setState({
            isLoading: 0,
            dataSource: data.exerciseByLeccion
          })
        }
      }
    );
  }
  
  
  render(props){
    if(this.state.isLoading === 2){
      return (<h2>There are not exercises available in this unit</h2>)
    }
    if(this.state.isLoading){
      return (<h2>Loading...</h2>)
    }
    return(
      <div>
      <ul>
        {
          this.state.dataSource.filter((e) => e.leccion === parseInt(this.props.match.params.id, 10)).map(p => (
            <li key={p.id}>
              <h3>{p.id}. {p.enunciado}</h3>
              <select name={p.enunciado}>
              <option value="0"> -- </option>
              <option value="1">{p.opc1}</option>
              <option value="2">{p.opc2}</option>
              </select>
            </li>
          ))
        }
      </ul>
      </div>
      
    )
  }
}

export default FullExercises;
