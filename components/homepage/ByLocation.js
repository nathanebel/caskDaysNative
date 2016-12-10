import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Row } from 'react-native-easy-grid'

import styles from './../global/styles'

class ByLocation extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Locations()
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