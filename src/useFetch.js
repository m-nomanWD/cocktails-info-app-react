import { useState, useEffect } from 'react'
import React, { Component } from 'react'

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])
  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const drinksData = await response.json()

      if (drinksData) {
        const fetchData = drinksData.drinks
        const newDrinks = fetchData.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strInstructions,
          } = item
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
          }
        })

        setData(newDrinks)
        setIsLoading(false)
      } else {
        setData([])
        setIsError(true)
      }
    } catch (error) {
      console.log(`data is not fetched from url ${error}`)
    }
  }
  useEffect(() => {
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  }, [])
  return { isError, isLoading, data }
}

export default useFetch
