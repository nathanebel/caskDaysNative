import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'

class Info extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ScrollView style={[ styles.viewBG,  { marginTop:62 }]}>
        <Grid>
          <Row style={[ styles.infoRow, { backgroundColor:'#B0DFE2'}]}>
            <Text style={styles.infoRowHeader}>FESTIVAL</Text>
            <Text style={[styles.infoRowParagraph, { marginTop:10 }]}>
              The 12th Annual Cask Days Cask-Conditioned Beer Festival takes place October 21st to Sunday, October 23rd, 2016 at Evergreen Brickworks in Toronto, Ontario.
              </Text>
            <Text style={[styles.infoRowParagraph, { marginTop:10 }]}>
              The festival will feature over 400 cask ales and ciders over three days. The festival returns for its fourth year to Evergreen Brickworks. </Text>
            <Text style={[styles.infoRowParagraph, { marginTop:10 }]}>Transformed from a collection of deteriorating heritage buildings into a global showcase for green design and urban sustainability. Evergreen Brick Works is a dynamic public space in the heart of Toronto's Don Valley.
            </Text>
          </Row>
          <Row>
            <Image source={require('./../img/space.jpg')} style={styles.infoRowImage} />
          </Row>
          <Row style={[ styles.infoRow, { backgroundColor:'#DEECDE'}]}>
            <Text style={styles.infoRowHeader}>WHAT IS CASK-ALE?</Text>
            <Text style={styles.infoRowParagraph}>
              Unfiltered, unpasteurized & naturally carbonated real ale. Once tapped, cask ale only has a few days to be consumed before it spoils.
            </Text>
          </Row>
          <Row>
            <Image source={require('./../img/caskPyramid.jpg')} style={styles.infoRowImage} />
          </Row>
          <Row style={[ styles.infoRow, { backgroundColor:'#FACCCC'}]}>
            <Text style={styles.infoRowHeader}>BREWS</Text>
            <Text style={styles.infoRowParagraph}>
              Cask Days welcomes breweries from across Canada and the United States to showcase their finest brews. </Text>
            <Text style={[styles.infoRowParagraph, { marginTop:10 }]}>
              This year, the state of Oregon has been chosen as the international brewery feature presented in conjunction with Gigantic Brewing of Portland. </Text>
            <Text style={[styles.infoRowParagraph, { marginTop:10 }]}>
              There will be a variety of 50 beers and ciders available from Oregon State that are available for the first time in Ontario.
            </Text>
          </Row>
          <Row style={[ styles.infoRow,  { backgroundColor:'#FEE9D0', marginBottom:50}]}>
            <Text style={styles.infoRowHeader}>REAL FOOD & REAL ALE</Text>
            <Text style={styles.infoRowParagraph}>
              Cask Days gathers some of Toronto’s most admired chef’s and top restaurants to compliment real food with real ale. </Text>
            <Text style={[styles.infoRowParagraph, { marginTop:10 }]}>
              This year the festival welcomes Lardo Sandwiches from Portland, Oregon as the international feature vendor.
            </Text>
          </Row>
        </Grid>
      </ScrollView>
    )
  }
}


export default Info