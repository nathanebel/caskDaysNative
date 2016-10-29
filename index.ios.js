import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import HomePage from './components/homepage/HomePage'
const beer = require('./beer.json')
import ByBrewery from './components/homepage/ByBrewery'
import ByLocation from './components/homepage/ByLocation'
import ByStyle from './components/homepage/ByStyle'
import Cider from './components/homepage/Cider'
import homebrew from './components/homepage/Homebrew'
import IPAChallenge from './components/homepage/IPAChallenge'

export default class caskDaysNative extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Navigator
        initialRoute = {{
          id: 'HomePage'
        }}
        renderScene={
          this.navigatorRenderScene
        }
        configureScene={(route, routeStack) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
        }
      />
    )
  }
  // end render
  navigatorRenderScene = (route, navigator) => {
    navigator = navigator
    switch (route.id){
      case 'HomePage':
        return( <HomePage navigator={navigator} /> )
    }
  }

}


AppRegistry.registerComponent('caskDaysNative', () => caskDaysNative);
