import React, { useCallback, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import toast from 'react-hot-toast'
import { type } from '@testing-library/user-event/dist/type'
function CocktailCard({ item }) {
  const { dispatch, state, data } = useGlobalContext()
  const { id, name, img, info, glass } = item
  const handleFavListEvent = () => {
    const checkAlreadyInList = state.cocktails.filter(
      (cocktail) => cocktail.id === id
    )
    console.log(checkAlreadyInList)
    if (checkAlreadyInList.length === 0) {
      dispatch({ type: 'ADD_ITEM', payload: item })
      toast.success(state.toastMessage, {
        duration: 2000,
      })
    } else {
      dispatch({ type: 'ITEM_ALREADY_EXIST' })
      toast.error(state.toastMessage, {
        duration: 2000,
      })
    }
  }

  return (
    <article className='cocktail-card' key={id}>
      <div className='cocktail-img'>
        <img src={img} alt='product img' />
      </div>
      <div className='cocktail-info'>
        <div className='cocktail-info-text'>
          <h2 style={{ marginBottom: '.5rem' }}>{name}</h2>
          <h3>{glass} </h3>
          <h5 style={{ marginBottom: '.5rem' }}>{info}</h5>
        </div>
        <div className='button-container'>
          <Link to={`/cocktailDetailPage/${id}`} className='link'>
            <button>Detail</button>
          </Link>
          <img
            src='/heart.png'
            alt='heart'
            className='heart-icon'
            onClick={() => {
              handleFavListEvent()
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default CocktailCard
