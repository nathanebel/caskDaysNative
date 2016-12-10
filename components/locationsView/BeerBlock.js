import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Button } from 'native-base'

import styles from '../global/styles'

import { connect } from 'react-redux'

import * as actions from '../../actions/index'

class BeerBlock extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let newBeer = this.props.beerData

    return(
        <View style={styles.listRow}>
          <Text>{newBeer.name}</Text>
          <Text>{newBeer.brewery}</Text>
          <Text>{newBeer.caskNum}</Text>
          <Button onPress={() => { this.props.onAddClick(newBeer) }}>
            Add
          </Button>
        </View>
    )
  }
}

function mapStateToProps(state) {
  return { selectedBeers: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (beerData) => {
      dispatch(actions.addBeer(beerData))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BeerBlock);
