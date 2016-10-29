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
import ByCider from './components/homepage/ByCider'
import ByHomebrew from './components/homepage/ByHomebrew'
import IPAChallenge from './components/homepage/IPAChallenge'

import Locations from './components/locationsView/Locations'
import Breweries from './components/breweriesView/Breweries'
import Cider from './components/ciderView/Cider'
import Styles from './components/stylesView/Styles'
import Homebrew from './components/homebrewView/Homebrew'
import IPAs from './components/IPAView/IPAs'
import MyList from './components/myListView/MyList'
import Info from './components/infoView/Info'

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
        return( <HomePage navigator={navigator} title='HomePage' /> )
      case 'Locations':
        return( <Locations navigator={navigator} title='Locations' /> )
      case 'Breweries':
        return( <Breweries navigator={navigator} title='Breweries' /> )
      case 'Cider':
        return( <Cider navigator={navigator} title='Cider' /> )
      case 'Styles':
        return( <Styles navigator={navigator} title='Styles' /> )
      case 'Homebrew':
        return( <Homebrew navigator={navigator} title='Homebrew' /> )
      case 'IPAs':
        return( <IPAs navigator={navigator} title='IPAs' /> )
      case 'My List':
        return( <MyList navigator={navigator} title='My List' /> )
      case 'Info':
        return( <Info navigator={navigator} title='Info' /> )
    }
  }

}


AppRegistry.registerComponent('caskDaysNative', () => caskDaysNative);
