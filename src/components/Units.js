import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullUnits from './FullUnits'
import FullExamples from './FullExamples'

//import GlRequest from './graphQLUtils';

const Units = () => (
  <Switch>
    <Route exact path='/units' component={FullUnits}/>
    <Route path='/units/:nombre' component={FullExamples}/>
  </Switch>
)
//<Route path='/units/:id' component={Examples}/>


/*
<div>
    <h1>Units will be here!</h1>
    <h2>🚀Wellcome to IbisDiscite, this are the units we offer to you.</h2>
  </div>
*/

export default Units


/*
const request = `query{
    allUnits{
      id
      nombre
    }
}`;


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
        <h2>🚀Wellcome to IbisDiscite, this are the units we offer to you.</h2>,
        <h1>no acá!</h1>
      )
    }
    return(
      <h2>🚀Wellcome to IbisDiscite, this are the units we offer to you.</h2>
      
    )
    /*
    <h2>🚀If you want to view examples of an specific unit, tap on the unit you want.</h2>

      <FlatList
        ItemSeparatorComponent={ () => <View style={ { width: 10, height: 10, backgroundColor: 'whitesmoke' } } /> }
        data={this.state.dataSource}
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('UnitId', {id: item.id, name: item.nombre})}
          >
            <Text style={styles.item}>{item.id}: {item.nombre}</Text>
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => index}
      />
    */
    

//*/