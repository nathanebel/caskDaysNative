import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Button } from 'native-base'

import styles from '../global/styles'

import store from './../../store'



class BeerBlock extends Component {

  constructor(props) {
    super(props)
    this.addBeer = this.addBeer.bind(this)
  }

  addBeer() {
    newBeer = this.props.beerData
    console.log('adding beer')
    store.dispatch({
      type: 'ADD_TODO',
      text: newBeer.name
    })
  }

  render() {

    newBeer = this.props.beerData

    return(
        <View style={styles.listRow}>
          <Text>{newBeer.name}</Text>
          <Text>{newBeer.brewery}</Text>
          <Text>{newBeer.caskNum}</Text>
          <Button onPress={this.addBeer}>
            Add
          </Button>
        </View>
    )
  }
}

export default BeerBlock