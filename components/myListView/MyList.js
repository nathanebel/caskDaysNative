import React, {Component} from 'react';
import {
  View,
  ScrollView,
  ListView
} from 'react-native';

import beer from './../../beer.json'
const beerList = beer.beer

import ListBlock from './ListBlock'

import { connect } from 'react-redux'

class MyList extends Component {

  render() {
    let selectedBeers = this.props.selectedBeers
    let beerIDs = []
    let pushIDs = selectedBeers.map(function(currentBeer, index) {
        return beerIDs.push(currentBeer.caskNum)
      // trying to create a new array (beerIDs) that has the caskNums of the current selected beers.
      // Push into beerIDs > reference beerList[caskNum] maybe thats faster than doing the whole map thanggggg
      })

    let getList = selectedBeers.map(function (currentBeer, index) {
      console.log('beer IDs')
      console.log(beerIDs)

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

      return <ListBlock
                data={currentBeer}
                key={index}
                getBG={getColour()}
              />
    })

    return (
      <View style={{paddingTop: 62, paddingBottom:50}}>
        <ScrollView>
            { getList }
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { selectedBeers: state }
}

export default connect(mapStateToProps)(MyList);
