import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import { Actions } from 'react-native-router-flux';

import styles from './../global/styles'

class IPAChallenge extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.IPAs()
  }

  render() {
    return(
    <TouchableWithoutFeedback onPress={this.onButtonPress}>
      <Col style={[ styles.homeSmall, { backgroundColor: '#DEECDE' }]}>
        <View>
          <Text>IPA Challenge</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default IPAChallenge