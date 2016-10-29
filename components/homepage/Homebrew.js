import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import styles from '../global/styles'

// TODO convert to stateless component

class Homebrew extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Homebrew</Text>
      </View>
    )
  }
}

export default Homebrew