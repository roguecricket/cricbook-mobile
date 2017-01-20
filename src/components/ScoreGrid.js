import React, {
  Component,
  PropTypes
} from 'react';
import {
  View
} from 'react-native';
import Title from '../elements/Title';
import Score from '../elements/Score';
import { Button } from 'react-native-elements'
import SelectPlayer from './SelectPlayer';
import AddBalls from './AddBalls';


class ScoreGrid extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
         <Title> ScoreGrid </Title>
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
}


export default ScoreGrid;
