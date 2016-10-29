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
import ByBrewery from './ByBrewery'
import ByLocation from './ByLocation'
import ByStyle from './ByStyle'
import Cider from './Cider'
import Homebrew from './Homebrew'
import IPAChallenge from './IPAChallenge'

class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
          <Header />
          <Grid>
            <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2'}]}>
              <ByLocation />
            </Row>
            <Row style={[ styles.homeLarge, { backgroundColor:'#DEECDE' }]}>
              <ByBrewery />
            </Row>
            <Col style={[ styles.homeSmall, { backgroundColor: '#FBCCCB' }]}>
              <ByStyle />
            </Col>
            <Row style={styles.homeHalfWidthContainer}>
              <Col style={[ styles.homeHalfWidth, { backgroundColor: '#FFE9CF' } ]}>
                <Cider />
              </Col>
              <Col style={[ styles.homeHalfWidth, { backgroundColor: '#B0DFE2' } ]}>
                <Homebrew />
              </Col>
            </Row>
            <Col style={[ styles.homeSmall, { backgroundColor: '#DEECDE' }]}>
              <IPAChallenge />
            </Col>
          </Grid>
        <Navbar />
      </View>
    )
  }
}

export default HomePage