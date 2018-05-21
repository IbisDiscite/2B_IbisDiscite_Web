import React, { Component }  from 'react'
import GraphQLRequest from '../graphQLUtils';
import { Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
        <Form >
        {
          this.state.dataSource.filter((e) => e.leccion === parseInt(this.props.match.params.id, 10)).map(p => (
            <FormGroup>
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
              <Label for="exampleSelect">{p.id}. {p.enunciado}</Label>
                <select name={p.enunciado}>
                <option value="0"> -- </option>
                <option value="1">{p.opc1}</option>
                <option value="2">{p.opc2}</option>
                </select>
              </Card>
            </FormGroup>
          ))
        }
        </Form>
      </div>
    )
  }
}

export default FullExercises;
