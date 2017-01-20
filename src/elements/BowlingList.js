import React, { Component } from 'react'
import { View , Text, StyleSheet } from 'react-native'
import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

class BowlingList extends Component {

  renderItem = (item, i) => {
    return (
      <Cell cellStyle="RightDetail"
            title={item.name}
            detail={item.overs} />
    )
  }

  render() {
    const {list} = this.props

    return (
      <TableView>
          <Section header="Bowling">
            {list.map(this.renderItem)}
          </Section>
      </TableView>
    )
  }
}




export default BowlingList;