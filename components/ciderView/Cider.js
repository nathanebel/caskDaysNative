import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import BeerBlock from './../locationsView/BeerBlock'

import beer from './../../beer.json'
const beerList = beer.beer

class Cider extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let getBeers = beerList.map(function(currentBeer, index) {

      if( currentBeer.section === 'Cider' ) {
        return <BeerBlock key={index} beerData={beerList[index]} />
      }
    }, this)
    console.log(this)
    console.log(beerList)

    return(
      <View>
        <ScrollView>
              { getBeers }
        </ScrollView>
      </View>
    )
  }
}

export default Cider