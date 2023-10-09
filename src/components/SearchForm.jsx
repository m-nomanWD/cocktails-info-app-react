import React, { Component, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import useFetch from '../useFetch'
import { useGlobalContext } from '../context'

function SearchForm() {
  const { urlModifier, setUrlModifier, fetchData } = useGlobalContext()
  return (
    <>
      <main>
        <article className='form-container'>
          <h2 className='form-title'>Search your Favriout Cocktail...</h2>
          <form action=''>
            <input
              type='text'
              placeholder='Search'
              className='form-input'
              value={urlModifier}
              onChange={(e) => {
                setUrlModifier(e.currentTarget.value)
              }}
            />
          </form>
        </article>
      </main>
    </>
  )
}

export default SearchForm
