import React, { useContext, useState, useReducer } from 'react'
import useFetch from './useFetch'

import reducer from './reducer'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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
