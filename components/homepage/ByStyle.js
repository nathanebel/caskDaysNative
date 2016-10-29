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
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to styles')
    this.props.navigator.push({
      id: 'Styles',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    })
  }

  render() {
    return(

    <TouchableWithoutFeedback onPress={this.onButtonPress}>
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