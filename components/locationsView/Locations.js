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

import navStyle from './../global/navigatorStyle'
import { Row, Grid } from "react-native-easy-grid";
import styles from '../global/styles'

class Locations extends Component {

  static navigatorStyle = navStyle.navigatorStyle

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(target) {
    console.log('going to ' + target)
    this.props.navigator.push({
      screen: target,
      title: target,
      backButtonTitle: '',
    });
  }


  render() {
    // TODO this definitely needs to be split up into multiple smaller components ¯\_(ツ)_/¯
    console.log('rendering locations')
    return(
      <View>
        <ScrollView>
          <Grid>
            <Row style={[ styles.listRow, { backgroundColor:'#B0DFE2'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('Oregon')}>
                <View>
                  <Text style={styles.locationText} >Oregon</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#DEECDE'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('California')}>
                <View>
                  <Text style={styles.locationText} >California</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#FBCCCB'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('New York')}>
                <View>
                  <Text style={styles.locationText} >New York</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#FFE9CF'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('Maritimes')}>
                <View>
                  <Text style={styles.locationText} >Maritimes</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#B0DFE2'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('British Columbia')}>
                <View>
                  <Text style={styles.locationText} >British Columbia</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#DEECDE'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('Quebec')}>
                <View>
                  <Text style={styles.locationText} >Quebec</Text>
                </View>
              </TouchableWithoutFeedback>
            </Row>
            <Row style={[ styles.listRow, { backgroundColor:'#FBCCCB'}]}>
              <TouchableWithoutFeedback onPress={() => this.onButtonPress('Ontario')}>
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