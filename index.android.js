import React, {
  Component,
  PropTypes
} from 'react'
import { AppRegistry } from 'react-native'
import MainLayout from './src/components/Main'

class HackathonStarter extends Component{
  render(){
    return (<MainLayout />)
  }
}

AppRegistry.registerComponent('HackathonStarter', () => HackathonStarter)
