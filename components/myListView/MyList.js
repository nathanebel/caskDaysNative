import React, {Component} from 'react';
import {
  View,
  ScrollView,
  ListView
} from 'react-native';

import ListBlock from './ListBlock'

import { connect } from 'react-redux'

class MyList extends Component {

  render() {
    console.log(this)
    let selectedBeers = this.props.selectedBeers
    let getList = selectedBeers.map(function (currentBeer, index) {
      console.log(currentBeer)
      return <ListBlock
                data={currentBeer}
                key={index}
              />
    })

    return (
      <View style={{paddingTop: 62}}>
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
