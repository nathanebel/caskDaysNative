import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'
import ByBrewery from './ByBrewery'
import ByLocation from './ByLocation'
import ByStyle from './ByStyle'
import ByCider from './ByCider'
import Homebrew from './ByHomebrew'
import IPAChallenge from './IPAChallenge'

class HomePage extends Component {

  static navigatorStyle = {
    navBarBackgroundColor:'#07698C',
    navBarTextColor:'#DEECDE',
    navBarButtonColor:'#DEECDE'
  }

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(target) {
    console.log('going to ' + target)
    this.props.navigator.push({
      screen: target,
      title: target
    });
  }

  render() {
    const nav = this.props.navigator
    return(
      <View>
        <Grid>
          <ByLocation target='Locations' onPress={this.onButtonPress} navigator={nav} />
          <ByBrewery target='Breweries' onPress={this.onButtonPress} navigator={nav} />
          <ByStyle target='Styles' onPress={this.onButtonPress} navigator={nav} />

          <Row style={styles.homeHalfWidthContainer}>

            <ByCider target='Cider' onPress={this.onButtonPress} navigator={nav} />
            <Homebrew target='Homebrew' onPress={this.onButtonPress} navigator={nav} />

          </Row>

          <IPAChallenge target='IPAs' onPress={this.onButtonPress} navigator={nav} />

        </Grid>
      </View>
    )
  }
}

export default HomePage

