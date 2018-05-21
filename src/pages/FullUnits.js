import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import GraphQLRequest from '../graphQLUtils';
import { Card, CardTitle, CardText, CardColumns, Button, CardDeck} from 'reactstrap';


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
      <CardColumns>
        {
          this.state.dataSource.map(p => (

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
              <CardTitle className={"text-center"}>{p.nombre} </CardTitle>
              <CardText className={"text-center"}>
                  <Button  href={`/units/examples/${p.id}`}> examples </Button>
                  <a> - </a>
                  <Button  href={`/units/exercises/${p.id}`}> exercises </Button>
              </CardText>
            </Card>
          ))
        }
      </CardColumns>
      </div>
    )
  }
}

export default FullUnits
