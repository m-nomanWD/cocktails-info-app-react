import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import CocktailCard from '../components/CocktailCard'
export class HomePage extends Component {
  render() {
    return (
      <>
        <main>
          <SearchForm />
          <CocktailCard />
        </main>
      </>
    )
  }
}

export default HomePage
