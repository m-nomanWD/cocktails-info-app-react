import React, { Component } from 'react'
import CocktailCard from './CocktailCard'
import { useGlobalContext } from '../context'
import { DotLoader } from 'react-spinners'
import Error from './Error'
function Cocktails() {
  const { isError, data, isLoading } = useGlobalContext()

  if (isLoading) {
    return (
      <DotLoader
        color={'brown'}
        loading={isLoading}
        size={`${window.innerWidth > 500 ? '60px' : '30px'}`}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    )
  }
  if (isError.flag) {
    return <Error />
  } else {
    return (
      <main>
        <section className='cocktails-container'>
          {data.map((item) => {
            return <CocktailCard item={item} key={item.id} />
          })}
        </section>
      </main>
    )
  }
}

export default Cocktails
