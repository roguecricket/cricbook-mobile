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
               <FormInput ref="runs" name="runs" placeholder="Enter the runs" />
               <FormLabel>Extra</FormLabel>
               <Picker ref="extra" style={styles.picker}>
                 <Picker.Item label="None" value="None"/>
                 <Picker.Item label="NO BALL" value="NB" />
                 <Picker.Item label="WIDE" value="WD" />
                 <Picker.Item label="LEG BYES" value="LB" />
                 <Picker.Item label="BYES" value="B" />
                 <Picker.Item label="WICKET" value="WK" />
               </Picker>
               <FormLabel>Player</FormLabel>
               <Picker ref="player" style={styles.picker}>
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
    const runs = this.refs.runs.value;
    const extra = this.refs.extra.selectedValue;
    const player = this.refs.player.selectedValue;

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
  players: [{name: 'sathya'}, {name: 'adhi'}],
  onSubmit: (e, data) => {}
}

export default AddBalls;
