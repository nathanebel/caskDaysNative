import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Button } from 'native-base'

import styles from '../global/styles'

import { connect } from 'react-redux'

import * as action from './../../actions/index'

console.log('listblock props')
console.log(this.props)

class ListBlock extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    let beer = this.props.data
    console.log()

    return(
      <View style={styles.listRow}>
        <Text>{ beer.name }</Text>
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