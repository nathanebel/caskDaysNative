import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Col } from 'react-native-easy-grid'

import { Actions } from 'react-native-router-flux';

import styles from './../global/styles'

class ByStyle extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Styles()
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onButtonPress}>
          <Col style={[styles.homeSmall, { flex:1, backgroundColor:'#FBCCCB', alignItems:'center', justifyContent:'center', flexDirection:'row' }]}>
            <View>
              <Text style={ styles.homePageButtonText } >BROWSE BY STYLE</Text>
            </View>
          </Col>
        </TouchableWithoutFeedback>
      </View>

    )
  }
}

export default ByStyle