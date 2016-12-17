import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

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
      <View style={{paddingTop:60, paddingBottom:60, flex: 1}}>
        <Grid>
          <Col size={65}>
            <Text>{newBeer.name}</Text>
            <Text>{newBeer.brewery}</Text>
            <Text>{newBeer.caskNum}</Text>
          </Col>
          <Col size={35} style={{marginRight:0, paddingRight:0}}>
            <AddOrRemove backgroundColor="#etc" beerData={this.props.beerData} />
          </Col>
        </Grid>
      </View>

    )
  }
}

export default BeerBlock
