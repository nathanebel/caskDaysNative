import { Navigation } from 'react-native-navigation';

import Locations from './../components/locationsView/Locations';
import Breweries from './../components/breweriesView/Breweries';
import HomePage from './../components/homepage/HomePage'
import MyList from './../components/myListView/MyList'
import Info from './../components/infoView/Info'

// Locations

import Oregon from './../components/locationsView/Oregon'
import California from './../components/locationsView/California'
import NewYork from './../components/locationsView/NewYork'
import Maritimes from './../components/locationsView/Maritimes'
import BritishColumbia from './../components/locationsView/BritishColumbia'
import Quebec from './../components/locationsView/Quebec'
import Ontario from './../components/locationsView/Ontario'

// Categories

import Styles from './../components/stylesView/Styles'
import Cider from './../components/ciderView/Cider'
import IPAs from './../components/IPAView/IPAs'
import Homebrew from './../components/homebrewView/Homebrew'


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('HomePage', () => HomePage)
  Navigation.registerComponent('Locations', () => Locations)
  Navigation.registerComponent('Breweries', () => Breweries)
  Navigation.registerComponent('MyList', () => MyList)
  Navigation.registerComponent('Info', () => Info)

  // Locations
  Navigation.registerComponent('Oregon', () => Oregon)
  Navigation.registerComponent('California', () => California)
  Navigation.registerComponent('New York', () => NewYork)
  Navigation.registerComponent('Maritimes', () => Maritimes)
  Navigation.registerComponent('British Columbia', () => BritishColumbia)
  Navigation.registerComponent('Quebec', () => Quebec)
  Navigation.registerComponent('Ontario', () => Ontario)

  // Categories

  Navigation.registerComponent('Cider', () => Cider)
  Navigation.registerComponent('IPAs', () => IPAs)
  Navigation.registerComponent('Styles', () => Styles)
  Navigation.registerComponent('Homebrew', () => Homebrew)




}