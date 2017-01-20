import React, {
  Component,
  PropTypes
} from 'react';

import {View, StyleSheet} from 'react-native';

import { FormLabel, FormInput , Button} from 'react-native-elements';
import NavigationBar from 'react-native-navbar';


class AddPlayer extends Component{
  render(){
    return (<View>
          <NavigationBar
            style={styles.header}
            title={{title: this.props.title, 'tintColor': 'white'}}
            leftButton={{title: 'Back' , 'tintColor': 'white', handler: this.onPressBack.bind(this)}}
           />

           <FormLabel>Name</FormLabel>
           <FormInput ref="playername" placeholder={this.props.placeholder}/>
           <Button
            large
            backgroundColor="skyblue"
            icon={{name: 'cached'}}
            title={this.props.submitbutton}/>
          </View>)
  }

  onPressBack(){
      this.props.navigator.pop();
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

AddPlayer.defaultProps = {
  title: 'Add Player',
  placeholder: 'Enter the player name',
  submitbutton: 'Add Player'
}

export default AddPlayer;
