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


    const getColour = (index) => {
      if (index % 4 === 0 ) {
        return '#FEE9D0'
      } else if (index % 4 === 1) {
        return '#B1DFE1'
      } else if (index % 4 === 2) {
        return '#DEECDE'
      } else if (index% 4 === 3) {
        return '#FACCCC'
      }
    }

    let getBeers = beerList.map(function(currentBeer, index) {

      if( currentBeer.brewery === this.props.data ) {
        return <BeerBlock getBG={getColour(index)} key={index} beerData={beerList[index]} />
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



