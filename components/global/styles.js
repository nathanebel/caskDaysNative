import { StyleSheet } from 'react-native'

import Dimensions from 'Dimensions'

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height - 25



const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#07698C', // changing navbar color
  },
  navTitle: {
    color: '#E9F5F1', // changing navbar title color

  },
  routerScene: {
    //
  },
  viewBG:{
    backgroundColor:'#D5E8F0',
    height: winHeight,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'white',
  },
  homePageButtonText: {
    fontFamily:'Raleway',
    color:'#5E6465',
    opacity:0.95,
    fontWeight:'500',
    letterSpacing:1.5
  },
  halfHeight: {
    flex: .5,
    backgroundColor: '#b4d455',
    maxWidth:winWidth / 2
  },
  quarterHeight: {
    flex: .25,
    backgroundColor: 'grey',
  },
  homeLarge: {
    height: winHeight / 4
  },
  homeSmall: {
    height: winHeight / 8
  },
  homeHalfWidth: {
    height: winHeight / 8,
    width: winWidth /2
  },
  homeHalfWidthContainer: {
    height:winHeight / 8,
  },
  homeLocationText: {
    color:'purple'
  },
  beerBlockButton:{
    marginLeft:0,
    marginRight:0,
    paddingLeft:0,
    paddingRight:0,
    backgroundColor:'transparent',
  },
  beerBlockName:{
    fontFamily:'Raleway',
    fontWeight:'600',
  },
  beerBlockBrewery:{
    fontFamily:'Raleway',
    fontWeight:'400',
  },
  beerBlockCaskNum:{
    fontFamily:'Raleway',
    fontWeight:'400',
    fontStyle:'italic'
  },
  listRow:{
    height:winHeight / 7
  },
  emptyListContainer:{
    justifyContent:'center',
    alignItems:'center'
},
  emptyListText:{
  fontFamily:'Raleway',
    fontWeight:'400'
  },
  locationText: {
    textAlign:'center',
    lineHeight: winHeight / 7,
    fontSize:32,
    fontFamily:'Raleway',
    fontWeight:'300',
  },
  locationListContainer:{
    marginTop:62, marginBottom:25
  },
  breweryText: {
    textAlign:'center',
    fontSize:25,
    fontFamily:'Raleway',
    fontWeight:'300',
  },
  navButton: {
    fontSize: 30,
    color: '#E9F5F1',
    textAlign:'center',
  },
  infoRow:{
    paddingLeft:15,
    paddingRight:15,
    paddingTop:15,
    paddingBottom:15
  },
  infoRowHeader:{
    paddingBottom:10,
    fontFamily:'Raleway',
    textAlign:'left',
    letterSpacing:1,
    fontWeight:'800',
    fontSize:28
  },
  infoRowParagraph:{
    fontFamily:'Raleway',
    lineHeight:18,
    letterSpacing:1,
    textAlign:'left'
  },
  infoRowImage:{
    resizeMode:'cover',
    height:260,
    width:winWidth,
  },
  header: {
    height: winHeight / 10,
    backgroundColor:'#07698C'
  }
})

export default styles