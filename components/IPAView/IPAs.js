import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import BeerBlock from './../locationsView/BeerBlock'

import beer from './../../beer.json'
const beerList = beer.beer

class IPAs extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let getBeers = beerList.map(function(currentBeer, index) {

      if( currentBeer.section === 'IPA Challenge' ) {
        return <BeerBlock key={index} beerData={beerList[index]} />
      }
    }, this)

    return(
      <View style={{marginTop:62}}>
        <ScrollView>
          { getBeers }
        </ScrollView>
      </View>
    )
  }
}

export default IPAs