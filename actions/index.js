export const addBeer = (beerData) => {
  return {
    type: 'ADD_BEER',
    name: beerData.name,
    brewery: beerData.brewery,
    caskNum: beerData.caskNum,
    section: beerData.section
  }
}

export const removeBeer = (beerData) => {
  return {
    type: 'REMOVE_BEER',
    beerData
  }
}