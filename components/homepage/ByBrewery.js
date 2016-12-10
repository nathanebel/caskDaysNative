import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Row } from 'react-native-easy-grid'

import styles from './../global/styles'

import { Actions } from 'react-native-router-flux';

class ByBrewery extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Breweries()
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