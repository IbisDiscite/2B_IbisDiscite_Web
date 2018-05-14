import React, { Component }  from 'react'
import GraphQLRequest from '../graphQLUtils';

class Todayslesson extends Component{
  constructor(props){
    super(props)
    this.state = {
        dataSource: [{
        "id": 1,
        "name": "A blessing in disguise",
        "description": "a good thing that seemed bad at first"
        }],
        n: 0,
        isLoading: true
    }
    
    let request = `
    query{
      allTodayslessons{
        id
        name
        description
      }
    }`;
    
    GraphQLRequest(request,
      data => {
        this.setState({
          isLoading: false,
          dataSource: data.allTodayslessons,
          n: Math.floor(Math.random()*data.allTodayslessons.length)
        })
      }
    );
  }
  
  render(){
    
    if(this.state.isLoading){
      return (<h2>No lessons available at the moment</h2>)
    }
    return(
      <div>
      <h2>{this.state.dataSource[this.state.n].name}</h2>
      {this.state.dataSource[this.state.n].description}
      </div>
    )
  }
}

export default Todayslesson