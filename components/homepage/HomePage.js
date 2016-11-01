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
import NavWrap from './../global/NavWrap'

class HomePage extends Component {

  static navigatorStyle = {
    navBarHidden: true,
    navBarBackgroundColor:'#07698C',
    navBarTextColor:'#DEECDE',
    navBarButtonColor:'#DEECDE'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const nav = this.props.navigator
    return(
      <View>
        <Grid>
          <Header />
          <ByLocation navigator={nav} />
          <ByBrewery navigator={nav} />
          <ByStyle navigator={nav} />

          <Row style={styles.homeHalfWidthContainer}>

            <ByCider navigator={nav} />
            <Homebrew navigator={nav} />

          </Row>

          <IPAChallenge navigator={nav} />

        </Grid>
      </View>
    )
  }
}

export default HomePage