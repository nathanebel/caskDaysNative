import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import beer from './../../beer.json'
const beerList = beer.beer

import { Row, Grid } from "react-native-easy-grid";

import BeerBlock from './../locationsView/BeerBlock'

import styles from '../global/styles'

class Styles extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <View>
        <Grid>
          <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2', marginTop:62}]}>
            <Text>Hello Styles</Text>
          </Row>
        </Grid>
      </View>
    )
  }
}

export default Styles