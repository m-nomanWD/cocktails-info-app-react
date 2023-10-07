import React, { useContext } from 'react'
import useFetch from './useFetch'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const { isError, isLoading, data } = useFetch()

  return (
    <AppContext.Provider value={{ isError, isLoading, data }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }
