import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import BeerBlock from './../locationsView/BeerBlock'

import beer from './../../beer.json'
const beerList = beer.beer

class BreweryBlock extends Component {

  // need to fetch brewery name from props, then show only beers with relevant brewery name

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Actions.refresh({title: this.props.data})
    // update the page title based on props
  }

  render() {
    let getBeers = beerList.map(function(currentBeer, index) {

      if( currentBeer.brewery === this.props.data ) {
        return <BeerBlock key={index} beerData={beerList[index]} />
      }
    }, this)

    return(
      <View style={{ marginTop:62 }}>
        <ScrollView>
          { getBeers }
        </ScrollView>
      </View>

    )
  }
}

export default BreweryBlock



