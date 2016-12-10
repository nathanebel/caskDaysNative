import React, { Component } from 'react';
import {
  View,
  Navigator,
  ScrollView
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";

import beer from './../../beer.json'

import BreweryBlock from './BreweryBlock'

const beerList = beer.beer

class Breweries extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    console.log('getting uniques')
    const uniqueBreweries = [...new Set(beerList.map(item => item.brewery))];
    const breweriesSorted = uniqueBreweries.sort()
    console.log(breweriesSorted)

    function createBreweryBlocks(elem, index, arr) {

      return(
        <Row key={index}>
          <BreweryBlock name={uniqueBreweries[index]} />
        </Row>
        )
    }

    return(
      <View style={{ marginTop:62, marginBottom:62 }}>
        <ScrollView>
          <Grid>
              { uniqueBreweries.map(createBreweryBlocks) }
          </Grid>
        </ScrollView>
      </View>
    )
  }
}

export default Breweries