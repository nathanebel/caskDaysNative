import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// TODO convert to stateless component

class byStyle extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Cider</Text>
      </View>
    )
  }
}

export default byStyle