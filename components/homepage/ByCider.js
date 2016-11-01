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

class ByCider extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to cider')
    this.props.navigator.push({
      id: 'Cider',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    })
  }


  render() {
    return(
    <TouchableWithoutFeedback>
      <Col style={[ styles.homeHalfWidth, { backgroundColor: '#FFE9CF' } ]}>
        <View>
          <Text>Cider</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default ByCider