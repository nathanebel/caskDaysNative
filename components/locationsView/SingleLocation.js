import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import beer from './../../beer.json'
import BeerBlock from './BeerBlock'
const beerList = beer.beer

class Oregon extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const getBeers = beerList.map(function(currentBeer, index) {
      if( currentBeer.section === 'Oregon' ) {

        const getColour = () => {
          if (currentBeer.caskNum % 4 === 0 ) {
            return '#FEE9D0'
          } else if (currentBeer.caskNum % 4 === 1) {
            return '#B1DFE1'
          } else if (currentBeer.caskNum % 4 === 2) {
            return '#DEECDE'
          } else if (currentBeer.caskNum % 4 === 3) {
            return '#FACCCC'
          }
        }

        return <BeerBlock getBG={getColour()} key={index} beerData={currentBeer} />
      }
    })

    return(
      <View>
        <ScrollView style={{ marginTop:62 }}>
          { getBeers }
        </ScrollView>
      </View>

    )
  }
}

export default Oregon