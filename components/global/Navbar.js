import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import styles from './styles'
import NavButton from './NavButton'

import { Col, Grid } from "react-native-easy-grid";

// TODO convert to stateless component

class Navbar extends Component {

  render() {
    return(
      <View style={styles.navbar}>
        <Grid>

          <Col>
            <NavButton
              target='Home'
              icon='ios-beer-outline'
            />
          </Col>

          <Col>
            <NavButton
              target='My List'
              icon='ios-clipboard-outline'
            />
          </Col>

          <Col>
            <NavButton
              target='Info'
              icon='ios-help-circle-outline'
            />
          </Col>

        </Grid>
      </View>
    )
  }
}

export default Navbar