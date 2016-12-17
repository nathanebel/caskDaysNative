import './ReactotronConfig'

import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native'

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
import Icon from 'react-native-vector-icons/Ionicons';

const add = (<Icon name="plus" size={30} color="#900" />)

const getIcons = (title) => {
  switch(title) {
    case 'Home' :
      return <Icon style={{ height:25 }} name="ios-beer" size={25} color="#E9F5F1" />
    case 'My List' :
      return <Icon style={{ height:25 }} name="md-clipboard" size={25} color="#E9F5F1" />
    case 'Info' :
      return <Icon style={{ height:25 }} name="ios-map-outline" size={25} color="#E9F5F1" />
  }
}

const TabIcon = ({selected, title}) => {
  return (
    <View style={{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', }}>
      {getIcons(title)}
      <Text style={{ textAlign:'center', color:'#E9F5F1', marginBottom:0, paddingBottom:0 }} >{title}</Text>
    </View>

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
              tabBarStyle={{backgroundColor: '#07698C'}}
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
