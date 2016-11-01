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

import { Row } from 'react-native-easy-grid'

import styles from './../global/styles'

// TODO convert to stateless component

class ByBrewery extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to breweries')
    this.props.navigator.push({
      id: 'Breweries',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    })
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={this.onButtonPress}>
        <Row style={ [ styles.homeLarge, { backgroundColor:'#DEECDE' } ] }>
          <View>
            <Text style={ styles.homeLocationText }>Browse by Brewery</Text>
          </View>
        </Row>
      </TouchableWithoutFeedback>
    )
  }
}

export default ByBrewery