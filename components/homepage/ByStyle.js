import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Navigator
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import styles from './../global/styles'

// TODO convert to stateless component

class ByStyle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
    <TouchableWithoutFeedback onPress={() => this.props.onPress(this.props.target)}>
      <Col style={[ styles.homeSmall, { backgroundColor: '#FBCCCB' }]}>
        <View>
          <Text>Browse by Style</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default ByStyle