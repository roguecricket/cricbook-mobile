import React, {
  Component,
  PropTypes
} from 'react';

import {
  Navigator,
  View
} from 'react-native';

import App from './App';

const initialRoute = {component: App,
                      name: "AppHome", props: {}};


class MainLayout extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<Navigator
            initialRoute= {initialRoute}
            renderScene={
              this.onNavigate.bind(this)
            } />)
  }

  onNavigate(route, navigator){
    return <route.component {...route.props} navigator={navigator}/>
  }
}

export default MainLayout;
