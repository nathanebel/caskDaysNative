import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import styles from './styles'

// TODO convert to stateless component

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={ styles.header }>
        <Text>Cask Days</Text>
      </View>
    )
  }
}

export default Header