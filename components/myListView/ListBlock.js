import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Button } from 'native-base'

import styles from '../global/styles'

import { Grid, Col, Row  } from 'native-base'

import { connect } from 'react-redux'

import * as action from './../../actions/index'

import Icon from 'react-native-vector-icons/Ionicons';
const remove = (<Icon  name="ios-close" size={40} color="#000" />)


class ListBlock extends Component {

  constructor(props) {
    super(props)
    this.getLocation = this.getLocation.bind(this)
  }

  getLocation() {
    // creating a switch etc to grab the caskNum and return the location
    let beer = this.props.data.caskNum

    if(beer > 0 && beer < 50   ) {
      return "Oregon"
    } else if(beer > 49 && beer < 78) {
      // Cali
      return "California"
    } else if(beer > 77 && beer < 105) {
      // New York
      return "New York"
    } else if(beer > 104 && beer < 126) {
      // Maritimes
      return "Maritimes"
    } else if(beer > 125 && beer < 155) {
      // BC
      return "British Columbia"
    } else if(beer > 155 && beer < 208) {
      // quebec
      return "Quebec"
    } else if(beer > 207 && beer < 336) {
      // ontario
      return "Ontario"
    } else if(beer > 336 && beer < 355) {
      return "Homebrew"
    } else if(beer > 354 && beer <  410 ) {
      return "Cider"
    } else if(beer > 410 && beer < 441) {
      return "IPA Challenge"
    }
  }

  render() {
    let beer = this.props.data

    return(
      <View style={{ backgroundColor:this.props.getBG }}>
        <Grid>
          <Col style={{ marginLeft:15, marginTop:15, marginBottom:15 }} size={65}>
            <View style={{ flex:1, justifyContent:'center' }}>
              <Text style={styles.beerBlockName}>{ beer.name }</Text>
              <Text style={[styles.beerBlockBrewery, { paddingTop:15, paddingBottom:15}]}>{ beer.brewery } </Text>
              <Text style={styles.beerBlockCaskNum}>{"Cask # " + beer.caskNum + " (" + this.getLocation() +  ")" }</Text>
            </View>
          </Col>
          <Col style={{ marginLeft:15 }} size={35}>
            <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableWithoutFeedback onPress={() => { this.props.onRemoveClick(beer) }}>
                { remove }
              </TouchableWithoutFeedback>
            </View>
          </Col>
        </Grid>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { selectedBeers: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick:  (beerData) => {
      dispatch(action.removeBeer(beerData))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListBlock)