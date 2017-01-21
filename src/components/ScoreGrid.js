import React, {
  Component,
  PropTypes
} from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/';
import NavigationBar from 'react-native-navbar';
import Score from '../elements/Score';
import { Button } from 'react-native-elements'
import SelectPlayer from './SelectPlayer';
import AddPlayer from './AddPlayer';
import AddBalls from './AddBalls';
import {getOvers, getActiveBatsman, isExtra, getRuns, getOverInfo} from '../utils';
import {persistedStore} from '../store';


class ScoreGrid extends Component{
  constructor(props){
    super(props);
    this.state = {
      bowlerAlreadySelected: false,
      onBowlerSelect: true
    }
  }

  render(){
    const {team, batting, runs, wickets, overString, bowling} = this.props;
    return (
      <View>
        <NavigationBar
          style={styles.header}
          title={{title: 'ScoreGrid', 'tintColor': 'white'}}
          leftButton={{title: 'RESET' , 'tintColor': 'white', 'handler': this.onPressReset.bind(this)}}
          rightButton={{title: 'CHANGE', 'tintColor': 'white', 'handler': this.onPressChange.bind(this)}}/>

         <Score team = {team}
                batting={batting}
                runs={runs}
                wickets={wickets}
                overs={overString}
                bowling={bowling}/>
              <View>
                <Button
                  backgroundColor="skyblue"
                  icon={{name: 'done'}}
                  title='Next Ball'
                  onPress={this.onUpdate.bind(this)}/>
                <Button
                  backgroundColor="skyblue"
                  icon={{name: 'done'}}
                  title='Next Over'
                  onPress={this.onUpdateOver.bind(this)}/>
              </View>

      </View>
    )
  }

  onUpdateOver(){
    this.props.navigator.push({
      component: SelectPlayer,
      props: {},
      name: "Select Bowler"
    });
  }

  selectBowler(){
    this.props.navigator.push({
      component: SelectPlayer,
      props: {title: 'Select Bowler', onSubmit: this.onSelection.bind(this)},
      name: "Select"
    })
  }

  onSelection(e, data){
    console.log("Calling on select bowler");
    console.log(data);
    const {player} = data;
    const {overs} = this.props;
    this.props.selectBowler(player, overs.length);
  }

  onUpdate(){
    this.props.navigator.push({
      component: AddBalls,
      props: {title: 'Add Balls',
              onSubmit: this.onUpdateRuns.bind(this),
              players: this.props.activeOptions},
      name: "ADD BALLS"
    })
  }

  onUpdateRuns(e, data){
    const {runs, extra, player} = data;
    console.log(data);

    const is_extra = isExtra(data);
    const is_ball = is_extra ? 0 : 1;
    const calculated = getRuns(data);

    console.log("Is EXtra", is_extra);
    console.log("IS BALL", is_ball);
    console.log("Calculated", calculated);
    this.props.nextBall(data,
                        this.props.c_over,
                        calculated);
    this.props.updateScore(parseInt(calculated), is_ball);
    this.props.updateBowler(this.props.bowler,
                            is_ball,
                            calculated);
    this.props.updateRuns(is_ball != 0 ? parseInt(runs) : 0, is_ball);
    if (parseInt(runs) % 2 == 1){
      this.props.toogleStrike();
    }
    if(extra == "WICKET"){
      console.log("There is a wicket");
      if(player == "None"){
        console.log("updating wickets");
        this.props.wicket();
        this.props.updateWickets(this.props.bowler);
      }
      else
         this.props.batsmanOut(player);
      this.props.addWicket();
    }

    this.setState({
       bowlerAlreadySelected: false
    })

    setTimeout(() => this.props.navigator.pop(), 1000)

  }

  onPressReset(){
    persistedStore.purge();
  }

  onPressChange(){
   this.props.navigator.push({
     component: AddPlayer,
     props: {title: "Change Team Name",
             placeholder: "Enter team name",
             submitbutton: "Change Name",
             onSubmit: this.onNameChange.bind(this)},
     name: "Change name"
   })
  }

  onNameChange(e, data){
    this.props.updateName(data.name);
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


const mapStateToProps = function(state){
  return {
    team: state.details.name,
    batting: getActiveBatsman(state.batting),
    runs: state.playing.runs,
    wickets: state.playing.wickets,
    overString: getOvers(state.playing.balls),
    overs: state.overs,
    balls: state.playing.balls,
    bowling: state.bowling.filter((bow) => bow.name == state.currentover.bowler),
    activeOptions: [...getActiveBatsman(state.batting)],
    bowler: state.currentover.bowler,
    c_over: state.currentover.over
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

ScoreGrid = connect(mapStateToProps, mapDispatchToProps)(ScoreGrid)

export default ScoreGrid;
