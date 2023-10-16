const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newCocktails = [...state.cocktails, action.payload]

    return {
      ...state,
      cocktails: newCocktails,
      toastMessage: 'cocktail added to fav list',
      counter: state.counter + 1,
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newCocktails = state.cocktails.filter(
      (cocktails) => cocktails.id !== action.payload
    )

    return {
      ...state,
      cocktails: newCocktails,
      toastMessage: 'cocktail removed from fav list',
      counter: state.counter - 1,
    }
  }
  if (action.type === 'ITEM_ALREADY_EXIST') {
    return { ...state, toastMessage: 'cocktail is already in the list' }
  }
  throw new Error('not catching')
}

export default reducer
