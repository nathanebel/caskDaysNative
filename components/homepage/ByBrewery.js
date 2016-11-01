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
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={() => this.props.onPress(this.props.target)}>
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