import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";

import styles from '../global/styles'

class TokensTab extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Grid>
          <Row style={[ styles.homeLarge, { backgroundColor:'#B0DFE2'}]}>
            <Text>Hello Info</Text>
          </Row>
        </Grid>
      </View>
    )
  }
}

export default TokensTab