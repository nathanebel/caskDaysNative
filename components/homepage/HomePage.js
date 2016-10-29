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
import ByCider from './ByCider'
import Homebrew from './ByHomebrew'
import IPAChallenge from './IPAChallenge'

class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const nav = this.props.navigator
    return(
      <View>
          <Header />
          <Grid>

              <ByLocation navigator={nav} />
              <ByBrewery navigator={nav} />
              <ByStyle navigator={nav} />

              <Row style={styles.homeHalfWidthContainer}>

                  <ByCider navigator={nav} />
                  <Homebrew navigator={nav} />

              </Row>

              <IPAChallenge navigator={nav} />

          </Grid>
        <Navbar />
      </View>
    )
  }
}

export default HomePage