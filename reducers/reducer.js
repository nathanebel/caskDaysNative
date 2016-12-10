export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_BEER':
      return state.concat([ {
        name: action.name,
        brewery: action.brewery,
        caskNum: action.caskNum } ])
    case 'REMOVE_BEER':
      const cask = action.beerData.caskNum;
      return state.filter(item => item.caskNum !== cask)
    default:
      return state
  }
}