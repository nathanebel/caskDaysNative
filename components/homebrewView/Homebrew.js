import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'
import Header from '../global/Header'
import Navbar from '../global/Navbar'

class Homebrew extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log('rendering locations')
    return(
      <View>
        <Grid>
          <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2'}]}>
            <Text>Hello Homebrew</Text>
          </Row>
        </Grid>
        <Navbar />
      </View>
    )
  }
}

export default Homebrew