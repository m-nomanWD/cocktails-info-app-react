import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import CocktailCard from '../components/CocktailCard'
import { useGlobalContext } from '../context'

const HomePage = () => {
  return (
    <>
      <main>
        <SearchForm />
        <CocktailCard />
      </main>
    </>
  )
}

export default HomePage
