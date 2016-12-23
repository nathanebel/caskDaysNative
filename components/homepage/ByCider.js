import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import { Actions } from 'react-native-router-flux';

import styles from './../global/styles'

class ByCider extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Cider()
  }

  render() {
    return(
    <TouchableWithoutFeedback onPress={this.onButtonPress}>
      <Col style={[ styles.homeHalfWidth, { flex:1, backgroundColor:'#FFE9CF', alignItems:'center', justifyContent:'center', flexDirection:'row' } ]}>
        <View>
          <Text style={ styles.homePageButtonText }>CIDER</Text>
        </View>
      </Col>
    </TouchableWithoutFeedback>
    )
  }
}

export default ByCider