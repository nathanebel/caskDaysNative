import React, { Component } from 'react';
import {
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

  constructor(props) {
    super(props)
  }

  render() {
    const nav = this.props.navigator
    return(
      <View style={{ marginTop:62 }}>
        <Grid>
          <ByLocation target='Locations' navigator={nav} />
          <ByBrewery target='Breweries' navigator={nav} />
          <ByStyle target='Styles' navigator={nav} />

          <Row style={styles.homeHalfWidthContainer}>

            <ByCider target='Cider' navigator={nav} />
            <Homebrew target='Homebrew' navigator={nav} />

          </Row>

          <IPAChallenge target='IPAs' navigator={nav} />

        </Grid>
      </View>
    )
  }
}

export default HomePage

