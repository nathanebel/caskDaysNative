import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import { Actions } from 'react-native-router-flux';

import styles from './../global/styles'

class ByStyle extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Styles()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onButtonPress}>
        <Col style={[styles.homeSmall, {backgroundColor: '#FBCCCB'}]}>
          <View>
            <Text>Browse by Style</Text>
          </View>
        </Col>
      </TouchableWithoutFeedback>
    )
  }
}

export default ByStyle