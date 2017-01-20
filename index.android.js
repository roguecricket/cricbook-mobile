import React, {
  Component,
  PropTypes
} from 'react'
import { AppRegistry } from 'react-native'
import MainLayout from './src/components/Main'
import {Provider} from 'react-redux';
import store from './src/store';

class HackathonStarter extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return  (
      <Provider store={store}>
         <MainLayout />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('HackathonStarter', () => HackathonStarter)
