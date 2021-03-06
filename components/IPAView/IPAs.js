import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import BeerBlock from './../locationsView/BeerBlock'

import beer from './../../beer.json'
const beerList = beer.beer

import styles from './../global/styles'

class IPAs extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const getBeers = beerList.map(function(currentBeer, index) {
      if( currentBeer.section === 'Cider' ) {

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
        <ScrollView style={[ styles.viewBG, { marginTop:62, marginBottom:50 }]}>
          { getBeers }
        </ScrollView>
      </View>
    )
  }
}

export default IPAs