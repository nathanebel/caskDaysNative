import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";
import styles from '../global/styles'
import { Actions } from 'react-native-router-flux'

class Locations extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }
  
  onButtonPress(target) {
      console.log('pressed')
    if(target === 'British Columbia') {
      Actions.BritishColumbia()
    } else if(target === 'Oregon') {
      Actions.Oregon()
    } else if(target === 'California') {
      Actions.California()
    } else if(target === 'New York') {
      Actions.NewYork()
    } else if(target === 'Maritimes') {
      Actions.Maritimes()
    } else if(target === 'Quebec') {
      Actions.Quebec()
    } else if(target === 'Ontario') {
      Actions.Ontario()
    }
  }


  render() {
    // TODO this definitely needs to be split up into multiple smaller components or done programmatically ¯\_(ツ)_/¯
    console.log('rendering locations')
    return(
      <View style={{ marginTop:62, marginBottom:60 }}>
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