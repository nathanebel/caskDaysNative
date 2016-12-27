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

// styles
import styles from './components/global/styles'

const add = (<Icon name="plus" size={30} color="#900" />)

const getIcons = (title) => {
  switch(title) {
    case 'Browse' :
      return <Icon style={{ height:25 }} name="ios-beer" size={25} color='#E9F5F1'/>
    case 'My List' :
      return <Icon style={{ height:25 }} name="md-clipboard" size={25} color='#E9F5F1'/>
    case 'Info' :
      return <Icon style={{ height:25 }} name="ios-map-outline" size={25} color='#E9F5F1'/>
  }
}

const getSelectedIcons = (title) => {
  switch(title) {
    case 'Browse' :
      return <Icon style={{ height:25 }} name="ios-beer" size={25} color='#FACCCC'/>
    case 'My List' :
      return <Icon style={{ height:25 }} name="md-clipboard" size={25} color='#FACCCC'/>
    case 'Info' :
      return <Icon style={{ height:25 }} name="ios-map-outline" size={25} color='#FACCCC'/>
  }
}

const TabIcon = ({selected, title}) => {
  return (
    <View style={{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', }}>
      {selected ? getSelectedIcons(title) : getIcons(title)}
      <Text style={{ textAlign:'center', color:selected ? '#FACCCC' : '#E9F5F1' , marginBottom:0, paddingBottom:0, fontFamily:'Raleway', fontWeight:'500', letterSpacing:1, fontSize:11, top:2.5, }} >
        {title}
      </Text>
    </View>

  )
}


export default class caskDaysRedux extends Component {

  render() {

    const homeTitleColourChange = () => {
      console.log('home title')
      console.log(this)
      return "#000"
    }

    return (
      <Provider store={store}>
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
          <Scene key="root">
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{backgroundColor: '#07698C'}}
            >
              <Scene key="Home" title="Browse" icon={TabIcon}>
                <Scene
                  key="homePage"
                  component={HomePage}
                  title="Cask Days"
                />
                <Scene key="Locations" title="Locations"
                       component={Locations}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="California"
                       title="California"
                       component={California}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="BritishColumbia"
                       title="British Columbia"
                       component={BritishColumbia}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Maritimes"
                       title="Maritimes"
                       component={Maritimes}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="NewYork"
                       title="New York"
                       component={NewYork}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Ontario"
                       title="Ontario"
                       component={Ontario}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Oregon"
                       title="Oregon"
                       component={Oregon}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Quebec"
                       title="Quebec"
                       component={Quebec}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Breweries"
                       title="Breweries"
                       component={Breweries}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="BreweryIndividual"
                       title="BreweryIndividual"
                       component={BreweryIndividual}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Styles"
                       title="Styles"
                       component={Styles}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Cider"
                       title="Cider"
                       component={Cider}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="Homebrew"
                       title="Homebrew"
                       component={Homebrew}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
                <Scene key="IPAs"
                       title="IPAs"
                       component={IPAs}
                       leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
              </Scene>

              <Scene key="myList" title="My List" icon={TabIcon}>
                <Scene
                  key="myListHome"
                  component={MyList}
                  title="My List"
                  initial={true}
                  leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
                />
              </Scene>

              <Scene key="info" title="Info" icon={TabIcon}>
                <Scene
                  key="infoHome"
                  component={Info}
                  leftButtonIconStyle = {{ tintColor:'#E9F5F1'}}
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
