import React, { useContext, useState, useReducer } from 'react'
import useFetch from './useFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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
    throw new Error('not catching')
  }
  const initialState = { cocktails: [], toastMessage: '', counter: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [checkId, setCheckId] = useState('')
  const { isError, isLoading, data, urlModifier, setUrlModifier, fetchData } =
    useFetch()

  return (
    <AppContext.Provider
      value={{
        isError,
        isLoading,
        data,
        urlModifier,
        setUrlModifier,
        fetchData,
        checkId,
        setCheckId,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }
