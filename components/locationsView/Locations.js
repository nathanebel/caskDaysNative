import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'

class Locations extends Component {
  static navigatorStyle = {
    navBarBackgroundColor:'#07698C',
    navBarTextColor:'#DEECDE',
    navBarButtonColor:'#DEECDE'
  }

  constructor(props) {
    super(props)
  }

  render() {
    // TODO this can definitely be split up into multiple smaller components, and maybe we can loop through the beers here and feed only the relevant # beers as props ¯\_(ツ)_/¯ 
    console.log('rendering locations')
    return(
      <View>
        <ScrollView>
          <Grid>
            <Row style={[ styles.listRow, { backgroundColor:'#B0DFE2'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >Oregon</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#DEECDE'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >California</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#FBCCCB'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >New York</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#FFE9CF'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >Maritimes</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#B0DFE2'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >British Columbia</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#DEECDE'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >Quebec</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#FBCCCB'}]}>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.locationText} >Ontario</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
          </Grid>
        </ScrollView>
      </View>
    )
  }
}

export default Locations