import React, { useContext, useState } from 'react'
import useFetch from './useFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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
