import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'
import Header from '../global/Header'
import Navbar from '../global/Navbar'

class Breweries extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Header />
        <Grid>
          <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2'}]}>
            <Text>Hello Breweries</Text>
          </Row>
        </Grid>
        <Navbar />
      </View>
    )
  }
}

export default Breweries