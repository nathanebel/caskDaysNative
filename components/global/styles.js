import { StyleSheet } from 'react-native'

import Dimensions from 'Dimensions'

console.log(Dimensions.get('window'))

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height - 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'white',
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
  listRow:{
    height:winHeight / 7
  },
  locationText: {
    textAlign:'center',
    lineHeight: winHeight / 7,
    fontWeight:'200',
    fontSize:32,
  },
  navbar: {
    top: winHeight - winHeight / 10,
    left: 0,
    position: 'absolute',
    width:winWidth,
    height:winHeight / 10,
    backgroundColor:'#07698C',
    alignItems: 'center'
  },
  navButton: {
    fontSize: 30,
    color: '#E9F5F1',
    textAlign:'center',
    paddingTop: 5
  },
  header: {
    height: winHeight / 10,
    backgroundColor:'#07698C'
  }
})

export default styles