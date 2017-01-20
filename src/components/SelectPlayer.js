import React, {
  Component,
  PropTypes
} from 'react';

import {View, Text, StyleSheet, Picker} from 'react-native';

import { FormLabel, FormInput , Button} from 'react-native-elements';
import NavigationBar from 'react-native-navbar';
import AddPlayer from './AddPlayer';

class SelectPlayer extends Component{
  constructor(props){
    super(props);
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
           <Picker ref="player" style={styles.picker}>
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

  onPressAdd(e){
    this.props.navigator.push({
      component: AddPlayer,
      props: {type: this.props.type},
      name: "AddPlayerShift"
    });
  }

  onPressBack(){
    this.props.navigator.pop();
  }

  onSelect(e){
     const player = this.refs.player.selectedValue;
     this.props.onSubmit(e, {
       player
     })
     this.props.navigator.pop();
  }

}

SelectPlayer.defaultProps = {
  type: 'batting',
  players: [{name: 'sathya'}, {name: "adhi"}],
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


export default SelectPlayer;
