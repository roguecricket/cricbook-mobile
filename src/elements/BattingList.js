import React, { Component } from 'react'
import { View , Text, StyleSheet } from 'react-native'
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

class BattingList extends Component {

  renderItem = (item, i) => {
    return (
      <Cell cellStyle="RightDetail"
            title={item.name}
            detail={item.runs + "("+item.balls+")"} />
    )
  }

  render() {
    const {list} = this.props

    return (
      <TableView>
          <Section header="Batting">
            {list.map(this.renderItem)}
          </Section>
      </TableView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  }
})


export default BattingList;
