import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import { Actions } from 'react-native-router-flux';

import styles from './../global/styles'

class IPAChallenge extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.IPAs()
  }

  render() {
    return(
    <TouchableWithoutFeedback onPress={this.onButtonPress}>
      <Col style={[ styles.homeSmall, { flex:1, backgroundColor:'#DEECDE', alignItems:'center', justifyContent:'center', flexDirection:'row' }]}>
        <View>
          <Text style={ styles.homePageButtonText } >IPA CHALLENGE</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default IPAChallenge