import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import toast from 'react-hot-toast'
import { type } from '@testing-library/user-event/dist/type'
function CocktailCard({ item }) {
  const { setCheckId, dispatch, state } = useGlobalContext()
  const { id, name, img, info, glass } = item

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
          <Link to='/cocktailDetailPage' className='link'>
            <button
              onClick={() => {
                setCheckId(id)
              }}
            >
              Detail
            </button>
          </Link>
          <img
            src='/heart.png'
            alt='heart'
            className='heart-icon'
            onClick={() => {
              dispatch({ type: 'ADD_ITEM', payload: item })
              toast.success(state.toastMessage, {
                duration: 2000,
              })
              console.log(state)
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default CocktailCard
