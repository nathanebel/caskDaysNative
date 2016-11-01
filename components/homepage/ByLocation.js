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

class ByLocation extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to locations')
    this.props.navigator.push({
      screen: 'Locations',
      title: 'Locations'
    });
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={this.onButtonPress}>
          <Row style={ [ styles.homeLarge, { backgroundColor:'#B0DFE2' } ] }>
            <View>
              <Text style={ styles.homeLocationText }>Browse by Location</Text>
            </View>
          </Row>
      </TouchableWithoutFeedback>
    )
  }
}

export default ByLocation