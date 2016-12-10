import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import beer from './../../beer.json'
import BeerBlock from './BeerBlock'
const beerList = beer.beer

class NewYork extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let getBeers = beerList.map(function(currentBeer, index) {
      if( currentBeer.section === 'New York' ) {
        return <BeerBlock key={index} beerData={currentBeer} />
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

export default NewYork