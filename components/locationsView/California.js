import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import beer from './../../beer.json'

const beerList = beer.beer

import BeerBlock from './BeerBlock'

class California extends Component {
  static navigatorStyle = {
    navBarTranslucent:true,
    drawUnderNavBar:true,
    navBarBackgroundColor:'#07698C',
    navBarTextColor:'#DEECDE',
    navBarButtonColor:'#DEECDE'
  }

  constructor(props) {
    super(props)
  }

  render() {
    let getBeers = beerList.map(function(currentBeer, index) {
      if( currentBeer.section === 'California' ) {
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

export default California