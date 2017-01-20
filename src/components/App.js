import React, {
  Component,
  PropTypes
} from 'react'
import { AppRegistry, View, Text} from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements';
import ScoreGrid from './ScoreGrid';
import BattingTable from './BattingTable';
import BowlingTable from './BowlingTable';

export default class App extends Component{
  constructor(props) {
  super(props)
  this.state = {
    selectedTab: 'score',
  }
}

changeTab (selectedTab) {
  this.setState({selectedTab})
}

render(){
  const { selectedTab } = this.state

  return (<Tabs>
            <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
              selected={selectedTab === 'score'}
              title={selectedTab === 'score' ? 'score' : null}
              renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='circle' size={33} />}
              renderSelectedIcon={() => <Icon color={'#6296f9'} name='circle' size={30} />}
              onPress={() => this.changeTab('score')}>
              <View>
                <ScoreGrid navigator={this.props.navigator}/>
              </View>
            </Tab>
            <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
              selected={selectedTab === 'batting'}
              title={selectedTab === 'batting' ? 'BAT' : null}
              renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person-add' size={33} />}
              renderSelectedIcon={() => <Icon color={'#6296f9'} name='person-add' size={30} />}
              onPress={() => this.changeTab('batting')}>
              <View>
               <BattingTable navigator={this.props.navigator}/>
              </View>
            </Tab>
            <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
              selected={selectedTab === 'bowling'}
              title={selectedTab === 'bowling' ? 'BOWL' : null}
              renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person-add' size={33} />}
              renderSelectedIcon={() => <Icon color={'#6296f9'} name='person-add' size={30} />}
              onPress={() => this.changeTab('bowling')}>
              <View>
               <BowlingTable navigator={this.props.navigator}/>
              </View>
            </Tab>
          </Tabs>)
}
}
