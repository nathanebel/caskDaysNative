import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';

import styles from './../global/styles'

class EmptyList extends Component {

  render() {

    return(
      <View style={ styles.emptyListContainer }>
        <Text style={[ styles.emptyListText, { marginTop:50}] }>You haven't added any beers yet!</Text>
        <Text style={[styles.emptyListText, {marginTop:10, marginBottom:10}]}>To get started, click 'Browse' in the bottom menu </Text>
        <Text style={styles.emptyListText}>Enjoy!</Text>
      </View>

    )
  }
}

export default EmptyList