import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// TODO convert to stateless component

class ByStyle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Browse byStyle</Text>
      </View>
    )
  }
}

export default ByStyle