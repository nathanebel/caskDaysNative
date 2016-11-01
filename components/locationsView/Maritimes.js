import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import {  Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'
import Header from '../global/Header'

class Maritimes extends Component {
  static navigatorStyle = {
    navBarTranslucent:true,
    drawUnderNavBar:true,
    navBarBackgroundColor:'#07698C',
    navBarTextColor:'#DEECDE',
    navBarButtonColor:'#DEECDE'
  }

  constructor(props) {
    super(props)
  }

  render() {
    console.log('rendering locations')
    return(
      <View>
        <Grid>
          <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2'}]}>
            <Text>Maritimes</Text>
          </Row>
        </Grid>
      </View>
    )
  }
}

export default Maritimes