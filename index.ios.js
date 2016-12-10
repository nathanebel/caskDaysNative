import './ReactotronConfig'

import React, {Component} from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import store from './store'

import { Provider } from 'react-redux'

console.log('store')
console.log(store)

// home
import HomePage from './components/homepage/HomePage'

// locations
import Locations from './components/locationsView/Locations'
import BritishColumbia from './components/locationsView/BritishColumbia'
import California from './components/locationsView/California'
import Maritimes from './components/locationsView/Maritimes'
import NewYork from './components/locationsView/NewYork'
import Ontario from './components/locationsView/Ontario'
import Oregon from './components/locationsView/Oregon'
import Quebec from './components/locationsView/Quebec'

//breweries
import Breweries from './components/breweriesView/Breweries'
import BreweryIndividual from './components/breweriesView/BreweryIndividual'

// styles
import Styles from './components/stylesView/Styles'

//cider
import Cider from './components/ciderView/Cider'

//homebrew
import Homebrew from './components/homebrewView/Homebrew'

//IPAs

import IPAs from './components/IPAView/IPAs'

//MyList
import MyList from './components/myListView/MyList'

// info
import Info from './components/infoView/Info'

const TabIcon = ({selected, title}) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  )
}

export default class caskDaysRedux extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{backgroundColor: '#ffffff'}}
            >
              <Scene key="Home" title="Home" icon={TabIcon}>
                <Scene
                  navBar={false}
                  key="homePage"
                  component={HomePage}
                  title="Cask Days"
                />
                <Scene key="Locations" title="Locations"
                       component={Locations}
                />
                <Scene key="California"
                       title="California"
                       component={California}
                />
                <Scene key="BritishColumbia"
                       title="British Columbia"
                       component={BritishColumbia}
                />
                <Scene key="Maritimes"
                       title="Maritimes"
                       component={Maritimes}
                />
                <Scene key="NewYork"
                       title="New York"
                       component={NewYork}
                />
                <Scene key="Ontario"
                       title="Ontario"
                       component={Ontario}
                />
                <Scene key="Oregon"
                       title="Oregon"
                       component={Oregon}
                />
                <Scene key="Quebec"
                       title="Quebec"
                       component={Quebec}
                />
                <Scene key="Breweries"
                       title="Breweries"
                       component={Breweries}
                />
                <Scene key="BreweryIndividual"
                       title="BreweryIndividual"
                       component={BreweryIndividual}
                />
                <Scene key="Styles"
                       title="Styles"
                       component={Styles}
                />
                <Scene key="Cider"
                       title="Cider"
                       component={Cider}
                />
                <Scene key="Homebrew"
                       title="Homebrew"
                       component={Homebrew}
                />
                <Scene key="IPAs"
                       title="IPAs"
                       component={IPAs}
                />
              </Scene>

              <Scene key="myList" title="My List" icon={TabIcon}>
                <Scene
                  key="myListHome"
                  component={MyList}
                  title="My List"
                  initial={true}
                />
              </Scene>

              <Scene key="info" title="Info" icon={TabIcon}>
                <Scene
                  key="infoHome"
                  component={Info}
                  title="Info"
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    )
  }
}


AppRegistry.registerComponent('caskDaysRedux', () => caskDaysRedux);
