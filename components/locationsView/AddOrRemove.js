import React, { Component } from 'react';

import styles from './../global/styles'

import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/Ionicons';
const add = (<Icon name="ios-add" size={40} color="#900" />)
const remove = (<Icon  name="ios-close" size={40} color="#900" />)

import * as actions from '../../actions/index'

// todo probably want to move this component elsewhere, since its being used in a ton of other places.

class AddOrRemove extends Component {

  constructor(props) {
    super(props)
  }

  componentWillUpdate() {
    console.log('i am updating')
  }

  render() {
    let beers = this.props.selectedBeers
    let newBeer = this.props.beerData
    let beerIDs = []

    const selectedBeers = () => beers.forEach(beer => {
      beerIDs.push(beer.caskNum)
    });

    selectedBeers()
    // push all selected beers into beerIDs on render

    const checkCask = (caskNum) => {
      return beerIDs.find(beer => beer === caskNum)
    }

    // if checkCask(thisBeer.props.selectedBeers) === undefined

    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {
          checkCask(newBeer.caskNum) === undefined ?
            <TouchableWithoutFeedback style={[styles.beerBlockButton, {alignSelf:'center'}]} onPress={() => { this.props.onAddClick(newBeer)}}><View>{ add }</View></TouchableWithoutFeedback>
            : <TouchableWithoutFeedback style={[styles.beerBlockButton, {alignSelf:'center'}]} onPress={() => { this.props.onRemoveClick(newBeer)} }><View>{ remove }</View></TouchableWithoutFeedback>
        }
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
    },
    onRemoveClick:(beerData) => {
      dispatch(actions.removeBeer(beerData))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddOrRemove);
