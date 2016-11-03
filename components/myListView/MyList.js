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
import store from './../../store.js'

class MyList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    function select(state) {
      return state.length
    }

    let currentValue
    function handleChange() {
      let previousValue = currentValue
      currentValue = select(store.getState())

      if (previousValue !== currentValue) {
        console.log('Some deep nested property changed from', previousValue, 'to', currentValue)
        this.forceUpdate()
        return currentValue
      }
    }

    let subscribeTest = store.subscribe(handleChange)

    return(
      <View>
        <Header />
        <Grid>
          <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2'}]}>
            <Text> { subscribeTest }   </Text>
          </Row>
        </Grid>
        <Navbar />
      </View>
    )
  }
}

export default MyList