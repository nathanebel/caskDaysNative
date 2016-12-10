import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import BeerBlock from './../locationsView/BeerBlock'

import beer from './../../beer.json'
const beerList = beer.beer

class Homebrew extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let getBeers = beerList.map(function(currentBeer, index) {

      if( currentBeer.section === 'Homebrew' ) {
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

export default Homebrew