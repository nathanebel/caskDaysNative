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

class IPAChallenge extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to cider')
    this.props.navigator.push({
      id: 'IPAs',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    })
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