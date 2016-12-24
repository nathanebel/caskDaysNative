import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Button } from 'native-base'

import styles from '../global/styles'

import { connect } from 'react-redux'

import * as action from './../../actions/index'

class ListBlock extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.data)
    let beer = this.props.data

    return(
      <View style={styles.listRow}>
        <Text>{ beer.name }</Text>
        <Text>{ beer.brewery } </Text>
        <Button onPress={() => { this.props.onRemoveClick(beer) }}>
          Remove
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
    onRemoveClick:  (beerData) => {
      dispatch(action.removeBeer(beerData))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListBlock)