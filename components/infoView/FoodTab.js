import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'

class TabOne extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Hello Food</Text>
      </View>
    )
  }
}

export default TabOne