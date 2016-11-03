import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens(); // this is where you register all of your app's screens

// start the app

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'HomePage', // this is a registered name for a screen
      title: 'Cask Days',
    },
    {
      label: 'My List',
      screen: 'MyList',
      title: 'Screen Two'
    },
    {
      label: 'Three',
      screen: 'Info',
      title: 'Screen Two'
    }
  ]
});

export default class caskDaysNative extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Text>Hello World</Text>
    )
  }
  // end render

}


AppRegistry.registerComponent('caskDaysNative', () => caskDaysNative);
