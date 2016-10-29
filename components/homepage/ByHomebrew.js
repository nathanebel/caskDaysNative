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

class ByHomebrew extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to Homebrew')
    this.props.navigator.push({
      id: 'Homebrew',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    })
  }

  render() {
    return(
    <TouchableWithoutFeedback onPress={this.onButtonPress}>
      <Col style={[ styles.homeHalfWidth, { backgroundColor: '#B0DFE2' } ]}>
        <View>
          <Text>Homebrew</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default ByHomebrew