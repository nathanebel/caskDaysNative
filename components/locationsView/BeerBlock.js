import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Row } from "react-native-easy-grid";

import styles from '../global/styles'

class BeerBlock extends Component {
  static navigatorStyle = {
    navBarTranslucent:true,
    drawUnderNavBar:true,
    navBarBackgroundColor:'#07698C',
    navBarTextColor:'#DEECDE',
    navBarButtonColor:'#DEECDE'
  }

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