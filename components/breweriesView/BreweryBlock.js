import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import { Row } from "react-native-easy-grid";
import styles from '../global/styles'
import { Actions } from 'react-native-router-flux'

class BreweryBlock extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(target) {
    console.log('pressed')
    Actions.BreweryIndividual(target)
  }

  render() {
    return(
      <Row style={[ styles.listRow, { backgroundColor:'#B0DFE2'}]}>
        <TouchableWithoutFeedback onPress={() => this.onButtonPress(this.props.name)}>
          <View>
            <Text style={styles.locationText} >{this.props.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Row>
    )
  }
}

export default BreweryBlock



