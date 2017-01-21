import React, {
  Component,
  PropTypes
} from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';
import AddPlayer from './AddPlayer';
import * as actionCreators from '../actions';
import {getOvers} from '../utils';


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
      props: {type: 'bowler', title: 'Add Bowler', onSubmit: this.onAddBowler.bind(this)},
      name: "AddPlayerShift"
    });
  }

  onAddBowler(e, data){
    const {name} = data;
    this.props.addBowler(name);
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
  list: [],
}

const mapStateToProps = function(state){
  return {
    list: state.bowling.map((bowl) => ({
      name: bowl.name,
      overs: getOvers(bowl.balls)
    }))
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

BowlingTable = connect(mapStateToProps, mapDispatchToProps)(BowlingTable)

export default BowlingTable;
