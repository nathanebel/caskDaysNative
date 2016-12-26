import React, { Component } from 'react';
import {
  View,
  Navigator,
  ScrollView
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";

import beer from './../../beer.json'

import styles from './../global/styles'

import BreweryBlock from './BreweryBlock'

const beerList = beer.beer

class Breweries extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const uniqueBreweries = [...new Set(beerList.map(item => item.brewery))];
    const breweriesSorted = uniqueBreweries.sort()

    const createBreweryBlocks = (elem, index) => {

      const getColour = () => {
        if (index % 4 === 0 ) {
          return '#FEE9D0'
        } else if (index % 4 === 1) {
          return '#B1DFE1'
        } else if (index % 4 === 2) {
          return '#DEECDE'
        } else if (index% 4 === 3) {
          return '#FACCCC'
        }
      }

      return(
        <Row key={index} style={[ {flex:1, justifyContent:'center'}]}>
          <BreweryBlock getBG={getColour()} name={uniqueBreweries[index]} />
        </Row>
        )
    }

    return(
      <View style={[styles.viewBG, { marginTop:62 }]}>
        <ScrollView style={{  marginBottom:50 }}>
          <Grid>
              { uniqueBreweries.map(createBreweryBlocks) }
          </Grid>
        </ScrollView>
      </View>
    )
  }
}

export default Breweries