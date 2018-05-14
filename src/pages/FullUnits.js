import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import GraphQLRequest from '../graphQLUtils';


class FullUnits extends Component{
  constructor(props){
    super(props)
    this.state = {
        dataSource: [{id: 1, nombre: "Grammar"}],
        isLoading: true
    }
    
    let request = `
    query{
      allUnits{
        id
        nombre
      }
    }`;
    
    GraphQLRequest(request,
      data => {
        this.setState({
          isLoading: false,
          dataSource: data.allUnits
        })
      }
    );
  }
  
  render(){
    
    if(this.state.isLoading){
      return (<h2>No units available at the moment</h2>)
    }
    return(
      <div>
      <ul>
        {
          this.state.dataSource.map(p => (
            <li key={p.id}>
              {p.nombre}  =  <Link to={`/units/examples/${p.id}`}> examples</Link>  | <Link to={`/units/exercises/${p.id}`}> exercises </Link>
            </li>
          ))
        }
      </ul>
      </div>
    )
  }
}

export default FullUnits
