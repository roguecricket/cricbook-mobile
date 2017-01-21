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
import * as actionCreators from '../actions';
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
      props: {type: 'batsman',
           title: 'Add Batsman', onSubmit: this.onAddBatsman.bind(this)},
      name: "AddPlayerShift"
    });
  }

  onAddBatsman(e, data){
    const {name} = data;
    const batsmanOnPitch = this.props.list.filter((bat) => !bat.isOut && !bat.inPavilion);
    if(batsmanOnPitch.length < 2){
      if(batsmanOnPitch.length > 0 && batsmanOnPitch[0].strike)
        this.props.addBatsman(name, false);
      else
        this.props.addBatsman(name, true);
    }
    else{
      this.props.addPlayer(name);
    }
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
  list: []
}


const mapStateToProps = function(state){
  return {
    list: state.batting
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

BattingTable = connect(mapStateToProps, mapDispatchToProps)(BattingTable);

export default BattingTable;
