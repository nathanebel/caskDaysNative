import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {Column as Col, Row} from 'react-native-flexbox-grid';

import styles, { winWidth, winHeight} from './../global/styles'

class ByLocation extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    Actions.Locations()
  }

  render() {
    return(
    <View>
      <TouchableWithoutFeedback onPress={this.onButtonPress}>
        <Row size={12} style={ [ styles.homeLarge, { flex:1, backgroundColor:'#B1DFE1', alignItems:'center', justifyContent:'center', flexDirection:'row' } ] } >
          <Col sm={6} md={6} lg={6} style={{ flex:1, backgroundColor:'#B1DFE1', alignItems:'center', justifyContent:'center', left:-15 }}>
            <Image
              source={require('./../img/casks.png')}
              style={{ resizeMode:'contain',
                width:125,
                height:100
              }} />
          </Col>
          <Col sm={6} md={6} lg={6} style={{ flex:1, backgroundColor:'#B1DFE1', alignItems:'center', justifyContent:'center', left:-15 }} >
            <Text style={ styles.homePageButtonText }>
              BROWSE BY LOCATION
            </Text>
          </Col>
        </Row>
      </TouchableWithoutFeedback>
    </View>
    )
  }
}

export default ByLocation