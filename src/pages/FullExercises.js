import React, { Component }  from 'react'
import GraphQLRequest from '../graphQLUtils';
import { Card, Form, FormGroup, Label, Button,CardDeck } from 'reactstrap';
import Header from '../components/Header'
var Style = {
    alignItems: 'center'
};
class FullExercises extends Component{

  constructor(props){
    super(props)
    this.state = {
        isLoading: 1,
        option:'',
        answer:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    let request = `
    query{
      exerciseByLeccion(leccion: ${this.props.match.params.id}){
        id
        opc1
        opc2
        opc3
        opc4
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

    handleChange = (event)=> {
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    handleSubmit(event) {
      console.log(this.state)
      if(this.state.option === this.state.resp){
          alert('Correct ');
      }else {
          alert('Ops, you made a mistake. The answer is: ' + this.state.resp);
      }
        event.preventDefault();
    }
  
  render(props){
    if(this.state.isLoading === 2){
      return (<h2>There are not exercises available in this unit</h2>)
    }
    if(this.state.isLoading){
      return (<h2>Loading...</h2>)
    }
      return <div style={Style}>
          <Form onSubmit={this.handleSubmit}>
              {
                  this.state.dataSource.filter((e) => e.leccion === parseInt(this.props.match.params.id, 10)).map(p => (
                      <FormGroup row>
                              <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                                  <Label for="exampleSelect">{p.id}. {p.enunciado}</Label>
                                  <select value={this.state.value} onChange={this.handleChange} name="option">
                                      <option value="0"> --</option>
                                      <option value={p.opc1}>{p.opc1}</option>
                                      <option value={p.opc2}>{p.opc2}</option>
                                      <option value={p.opc3}>{p.opc3}</option>
                                      <option value={p.opc4}>{p.opc4}</option>
                                  </select>
                                  <Button type="submit" value="Submit" onClick={()=> {this.setState({resp: p.respuesta})}}>Submit</Button>
                              </Card>
                      </FormGroup>
                  ))
              }
          </Form>
      </div>
  }
}

export default FullExercises;
