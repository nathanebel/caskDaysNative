import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator
} from 'react-native';

import Breweries from './../breweriesView/Breweries'
import Locations from './../locationsView/Locations'
import ByBrewery from './../homepage/ByBrewery'

class NavWrap extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ByBrewery />
    )
  }
  // end render
  navigatorRenderScene = (route, navigator) => {
    navigator = navigator
    switch (route.id){
      case 'Breweries':
        return( <Breweries navigator={navigator} title="Breweries" /> )
      case 'Locations':
        return(<Locations navigator={navigator} title="Locations" />)
    }
  }
}

export default NavWrap