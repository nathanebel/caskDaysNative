import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import styles from './styles'

import Dimensions from 'Dimensions'

import Icon from 'react-native-vector-icons/Ionicons';

const winHeight = Dimensions.get('window').height

// TODO convert to stateless component

class NavButton extends Component {

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('button pressed')
    console.log('target is ' + this.props.target)
  }


  render() {
    return(
        <TouchableHighlight style={{ height: winHeight / 10 }} onPress={this.onButtonPress} >
          <View>
            <Icon
              name={this.props.icon}
              style={ styles.navButton }
            />
            <Text style={{ textAlign:'center', color:'#E9F5F1' }}>
              {this.props.target}
            </Text>
          </View>
        </TouchableHighlight>
    )
  }
}

export default NavButton