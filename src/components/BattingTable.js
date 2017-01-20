import React, {
  Component,
  PropTypes
} from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';
import AddPlayer from './AddPlayer';


class BattingTable extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {list} = this.props;
    return (
        <View>
            <NavigationBar
              style={styles.header}
              title={{title: 'Batting', 'tintColor': 'white'}}
              rightButton={{title: 'ADD' , 'tintColor': 'white', 'handler': this.onPressAdd.bind(this)}}/>
              <TableView>
                  <Section>
                     {
                       list.map((item) => {
                         return ( <Cell cellStyle="RightDetail"
                                   title={item.name}
                                   detail={item.runs + "("+item.balls+")"} />)
                       })
                     }
                  </Section>
              </TableView>
        </View>
    )
  }

  onPressAdd(e){
    this.props.navigator.push({
      component: AddPlayer,
      props: {type: 'batsman', title: 'Add Batsman'},
      name: "AddPlayerShift"
    });
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

BattingTable.defaultProps = {
  list: [{name: "imthyas", runs: 0, balls: 0},
         {name: "vijay", runs: 0, balls: 0}],
}

export default BattingTable;
