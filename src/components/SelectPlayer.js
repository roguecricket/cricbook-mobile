import React, {
  Component,
  PropTypes
} from 'react';

import {View, Text, StyleSheet, Picker} from 'react-native';

import { FormLabel, FormInput , Button} from 'react-native-elements';
import NavigationBar from 'react-native-navbar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import AddPlayer from './AddPlayer';

class SelectPlayer extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected: 'None'
    }
  }

  render(){
    return (<View>
          <NavigationBar
            style={styles.header}
            title={{title: this.props.title, 'tintColor': 'white'}}
            leftButton={{title: 'Back' , 'tintColor': 'white', handler: this.onPressBack.bind(this)}}
            rightButton={{title: 'ADD' , 'tintColor': 'white', handler: this.onPressAdd.bind(this)}}/>
           <FormLabel> Select a player </FormLabel>
           <View>
           <Picker ref="player"
                   mode={Picker.MODE_DROPDOWN}
                   selectedValue={this.state.selected}
                   style={styles.picker}
                   onValueChange={this.onChange.bind(this)}>
           {
             this.props.players.map((player) => (<Picker.Item label={player.name} value={player.name} />))
           }
           </Picker>
           <Button
            large
            backgroundColor="skyblue"
            icon={{name: 'cached'}}
            title='SelectPlayer'
            onPress={this.onSelect.bind(this)}/>
           </View>
    </View>)

  }

  onChange(text){
    this.setState({selected: text})
  }

  onPressAdd(e){
    this.props.navigator.push({
      component: AddPlayer,
      props: {type: this.props.type, onSubmit: this.onAddBowler.bind(this)},
      name: "AddPlayerShift"
    });
  }

  onPressBack(){
    this.props.navigator.pop();
  }

  onAddBowler(e, data){
    const {name} = data;
    this.props.addBowler(name);
  }

  onSelect(e){
     const player = this.state.selected;
     const {overs} = this.props;
     console.log(player);
     this.props.selectBowler(player, overs.length);
     this.props.nextOver(overs.length, player);
     this.props.updateOver(overs.length);
     this.props.toogleStrike();
     this.props.navigator.pop();
  }

}

SelectPlayer.defaultProps = {
  type: '',
  players: [],
  title: 'select player'
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
  picker: {
    marginLeft: 15,
    marginRight: 15
  }
});

const mapStateToProps = function(state){
  return {
    players: [{name: 'None'}, ...state.bowling.map((bowl) => ({
      name: bowl.name
    }))],
    overs: state.overs
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

SelectPlayer = connect(mapStateToProps, mapDispatchToProps)(SelectPlayer);

export default SelectPlayer;
