import React from 'react'

import GlRequest from './graphQLUtils';

const request = `query{
    allUnits{
      id
      nombre
    }
}`;
const Units = () => (
  <div>
    <h1>Units will be here!</h1>
  </div>
)

//export default Units
///*
export default class UnitResults extends React.Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    GlRequest(
      request ,
      (data) => {
        this.setState({
          dataSource: data.allUnits,
          isLoading: false,
        })
      },
      (status, data) => {

      }
    );
  }
  
  render() {
    if(this.state.isLoading){
      return(
        <h1>no acá!</h1>
      )
    }
    return(
        Units()
      )
  }
}
//*/