import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import navStyle from './../global/navigatorStyle'
import beer from './../../beer.json'
import BeerBlock from './BeerBlock'
const beerList = beer.beer

class Maritimes extends Component {

  static navigatorStyle = navStyle.navigatorStyle

  constructor(props) {
    super(props)
  }

  render() {
    let getBeers = beerList.map(function(currentBeer, index) {
      if( currentBeer.section === 'Maritimes' ) {
        return <BeerBlock key={index} beerData={currentBeer} />
      }
    })

    return(
      <View>
        <ScrollView>
          { getBeers }
        </ScrollView>
      </View>

    )
  }
}

export default Maritimes