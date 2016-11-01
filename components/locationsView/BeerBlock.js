import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from '../global/styles'

class BeerBlock extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log('rendering locations')
    newBeer = this.props.beerData
    return(
        <View style={styles.listRow}>
          <Text>{newBeer.name}</Text>
          <Text>{newBeer.brewery}</Text>
          <Text>{newBeer.caskNum}</Text>
        </View>
    )
  }
}

export default BeerBlock