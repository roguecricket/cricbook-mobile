import React, {
  Component,
  PropTypes
} from 'react';
import {
  View, StyleSheet
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Score from '../elements/Score';
import { Button } from 'react-native-elements'
import SelectPlayer from './SelectPlayer';
import AddPlayer from './AddPlayer';
import AddBalls from './AddBalls';


class ScoreGrid extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        <NavigationBar
          style={styles.header}
          title={{title: 'ScoreGrid', 'tintColor': 'white'}}
          leftButton={{title: 'RESET' , 'tintColor': 'white', 'handler': this.onPressReset.bind(this)}}
          rightButton={{title: 'CHANGE', 'tintColor': 'white', 'handler': this.onPressChange.bind(this)}}/>

         <Score />
         <Button
          large
          backgroundColor="skyblue"
          icon={{name: 'cached'}}
          title='Update'
          onPress={this.onUpdate.bind(this)}/>
      </View>
    )
  }

  selectBowler(){
    this.props.navigator.push({
      component: SelectPlayer,
      props: {title: 'Select Bowler'},
      name: "Select"
    })
  }

  onUpdate(){
    this.props.navigator.push({
      component: AddBalls,
      props: {title: 'Add Balls'},
      name: "ADD BALLS"
    })
  }

  onPressReset(){

  }

  onPressChange(){
   this.props.navigator.push({
     component: AddPlayer,
     props: {title: "Change Team Name",
             placeholder: "Enter team name",
             submitbutton: "Change Name"},
     name: "Change name"
   })
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
});


export default ScoreGrid;
