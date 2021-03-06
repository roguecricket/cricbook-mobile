import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {Card, Text} from 'react-native-elements'
import BattingList from './BattingList';
import BowlingList from './BowlingList';

class Score extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {runs, wickets, overs, team, batting, bowling} = this.props;
    return (
      <View>

       <View>
          <Text h1  style={styles.card}>{team}</Text>
          <Text h2  style={styles.card}>{runs + "/"+ wickets}</Text>
          <Text h3  style={styles.card}> {overs + " overs"} </Text>
       </View>
       <BattingList list={batting}/>
       <BowlingList list={bowling}/>

      </View>
    )
  }
}

Score.defaultProps = {
  runs: 0,
  wickets: 0,
  team: 'untitle',
  batting: [],
  bowling: []
}


const styles = StyleSheet.create({
  card: {
    textAlign: 'center'
  },
})

export default Score;
