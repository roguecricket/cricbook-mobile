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



class BowlingTable extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {list} = this.props;
    return (
        <View>
            <NavigationBar
              style={styles.header}
              title={{title: 'Bowling', 'tintColor': 'white'}}
              rightButton={{title: 'ADD' , 'tintColor': 'white', handler: this.onPressAdd.bind(this)}}/>
              <TableView>
                  <Section>
                     {
                       list.map((item) => {
                         return ( <Cell cellStyle="RightDetail"
                                   title={item.name}
                                   detail={item.overs} />)
                       })
                     }
                  </Section>
              </TableView>
        </View>
    )
  }

  onPressAdd(){
    this.props.navigator.push({
      component: AddPlayer,
      props: {type: 'bowler', title: 'Add Bowler'},
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

BowlingTable.defaultProps = {
  list: [{name: "imthyas", overs: "0.0"},
         {name: "vijay", overs: "0.0"}],
}

export default BowlingTable;
