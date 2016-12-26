import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './../global/styles'

import AddOrRemove from './AddOrRemove'

import { Grid, Col, Row  } from 'native-base'

// todo probably want to move this component elsewhere, since its being used in a ton of other places.

class BeerBlock extends Component {

  constructor(props) {
    super(props)
  }

  // todo check if this block's beer is currently selected, then render either the Add or Remove

  render() {
    let newBeer = this.props.beerData

    return(
      <View style={{ flex: 1, backgroundColor:this.props.getBG }}>
        <Grid style={{ marginTop:15, marginBottom:15 }}>
          <Col style={{marginLeft:15}} size={65}>
            <Text style={styles.beerBlockName}>{newBeer.name}</Text>
            <Text style={[styles.beerBlockBrewery, { paddingTop:15, paddingBottom:15} ]}>{newBeer.brewery}</Text>
            <Text style={[styles.beerBlockCaskNum, { fontStyle:'italic' }]}>{"Cask # " + newBeer.caskNum}</Text>
          </Col>
          <Col size={35} style={{marginRight:0, paddingRight:0}}>
            <AddOrRemove beerData={this.props.beerData} />
          </Col>
        </Grid>
      </View>

    )
  }
}

export default BeerBlock
