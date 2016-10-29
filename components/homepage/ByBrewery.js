import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// TODO convert to stateless component

class ByBrewery extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Browse by Brewery</Text>
      </View>
    )
  }
}

export default ByBrewery