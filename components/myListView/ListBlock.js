import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { Button } from 'native-base'

import styles from '../global/styles'

import { Grid, Col, Row  } from 'native-base'

import { connect } from 'react-redux'

import * as action from './../../actions/index'

import Icon from 'react-native-vector-icons/Ionicons';
const remove = (<Icon  name="ios-close" size={40} color="#000" />)


class ListBlock extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.data)
    let beer = this.props.data

    return(
      <View style={{ backgroundColor:this.props.getBG }}>
        <Grid>
          <Col style={{ marginLeft:15, marginTop:15, marginBottom:15 }} size={65}>
            <View style={{ flex:1, justifyContent:'center' }}>
              <Text style={styles.beerBlockName}>{ beer.name }</Text>
              <Text style={[styles.beerBlockBrewery, { paddingTop:15, paddingBottom:15}]}>{ beer.brewery } </Text>
              <Text style={styles.beerBlockCaskNum}>{"Cask Num #" + beer.caskNum }</Text>
            </View>
          </Col>
          <Col style={{ marginLeft:15 }} size={35}>
            <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableWithoutFeedback onPress={() => { this.props.onRemoveClick(beer) }}>
                { remove }
              </TouchableWithoutFeedback>
            </View>
          </Col>
        </Grid>
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