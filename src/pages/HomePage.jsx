import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import Cocktails from '../components/Cocktails'
import { useGlobalContext } from '../context'

const HomePage = () => {
  return (
    <>
      <main>
        <SearchForm />
        <section className='cocktails-container'>
          <Cocktails />
        </section>
      </main>
    </>
  )
}

export default HomePage
