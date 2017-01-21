import React, {
  Component,
  PropTypes
} from 'react';
import {
  View, StyleSheet, Picker
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { FormLabel, FormInput , Button} from 'react-native-elements';



class AddBalls extends Component{
  constructor(props){
    super(props);
    this.state = {
      runs: 0,
      extra: 'None',
      player: 'None'
    }
  }

  render(){
    const {players} = this.props;
    const selectable = [{name: "None"}, ...players];
    return (<View>
              <NavigationBar
                style={styles.header}
                title={{title: this.props.title, 'tintColor': 'white'}}
                leftButton={{title: 'Back' , 'tintColor': 'white', handler: this.onPressBack.bind(this)}}
               />
               <View>
               <FormLabel>Runs</FormLabel>
               <FormInput ref="runs"
                          name="runs"
                          defaultValue={this.state.runs}
                          placeholder="Enter the runs"
                          onChangeText={(text) => {this.setState({runs: parseInt(text)})}} />
               <FormLabel>Extra</FormLabel>
               <Picker ref="extra"
                       selectedValue={this.state.extra}
                       onValueChange={(text) => {this.setState({extra: text})}}
                       style={styles.picker}>
                 <Picker.Item label="None" value="None"/>
                 <Picker.Item label="NO BALL" value="NB" />
                 <Picker.Item label="WIDE" value="WD" />
                 <Picker.Item label="LEG BYES" value="LB" />
                 <Picker.Item label="BYES" value="B" />
                 <Picker.Item label="WICKET" value="WICKET" />
               </Picker>
               <FormLabel>Player</FormLabel>
               <Picker ref="player"
                       selectedValue={this.state.player}
                       onValueChange={(text) => {this.setState({player: text})}}
                       style={styles.picker}>
                 {
                   selectable.map((player) => (<Picker.Item label={player.name} value={player.name} />))
                 }
               </Picker>

               <Button
                large
                backgroundColor="skyblue"
                icon={{name: 'done'}}
                title='Update Runs'
                onPress={this.handleOk.bind(this)} />

               </View>
           </View>)
  }

  onPressBack(){
      this.props.navigator.pop();
  }

  handleOk(e){
    const {runs, extra, player} = this.state;

    this.props.onSubmit(e, {
      runs,
      extra,
      player
    });

    this.props.navigator.pop()
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
  picker: {
    marginLeft: 15,
    marginRight: 15
  }
});

AddBalls.defaultProps = {
  players: [],
  onSubmit: (e, data) => {}
}

export default AddBalls;
