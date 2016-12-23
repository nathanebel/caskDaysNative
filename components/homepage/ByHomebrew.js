import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import { Actions } from 'react-native-router-flux';

import styles from './../global/styles'

class ByHomebrew extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Homebrew()
  }

  render() {
    return(
    <TouchableWithoutFeedback onPress={this.onButtonPress}>
      <Col style={[ styles.homeHalfWidth, { flex:1, backgroundColor:'#B0DFE2', alignItems:'center', justifyContent:'center', flexDirection:'row' } ]}>
        <View>
          <Text style={ styles.homePageButtonText } >HOMEBREW</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default ByHomebrew