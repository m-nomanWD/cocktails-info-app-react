import { useState, useEffect } from 'react'
import React, { Component } from 'react'

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({ flag: false, message: '' })
  const [urlModifier, setUrlModifier] = useState('')
  const [data, setData] = useState([])
  const fetchData = async (url) => {
    console.log(url)
    setIsLoading(true)
    setIsError({ ...isError, flag: false })
    try {
      const response = await fetch(url)
      const drinksData = await response.json()

      const cocktails = drinksData.drinks

      if (cocktails) {
        const newDrinks = cocktails.map((item) => {
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
        console.log(data)
        setIsLoading(false)
      } else {
        setData([])
        setIsLoading(false)
        setIsError({
          flag: true,
          message: 'Such Cocktail no fount in the database',
        })
      }
    } catch (error) {
      setIsLoading(false)
      setIsError({
        flag: true,
        message: `data is not fetched from url ${error}`,
      })
      console.log(`data is not fetched from url ${error}`)
      setData([])
      return error
    }
  }
  useEffect(() => {
    fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${urlModifier}`
    )
  }, [urlModifier])
  return { isError, isLoading, data, fetchData, urlModifier, setUrlModifier }
}

export default useFetch
