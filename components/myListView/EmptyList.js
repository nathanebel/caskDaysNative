import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';

import styles from './../global/styles'

class EmptyList extends Component {

  render() {

    return(
      <View style={ styles.emptyListContainer }>
        <Text style={[ styles.emptyListText, { marginTop:50}] }>You haven't added any beers yet!</Text>
        <Text style={[styles.emptyListText, {marginTop:10, marginBottom:30}]}>To get started, click 'Browse' in the bottom menu </Text>

        <Image source={require("./../img/chug.png")} style={{ height:450, resizeMode:'contain', top:25 }} />
      </View>

    )
  }
}

export default EmptyList