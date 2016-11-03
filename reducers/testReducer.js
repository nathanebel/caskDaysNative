export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ {text : action.text} ])
    default:
      return state
  }
}