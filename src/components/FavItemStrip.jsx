import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import toast from 'react-hot-toast'

export default function FavItemStrip({ cocktail }) {
  const { setCheckId, dispatch, state } = useGlobalContext()
  const { name, img, glass, id } = cocktail
  console.log(state)
  return (
    <article className='cocktail-strip'>
      <div className='strip-left'>
        <div className='strip-img'>
          <img src={img} alt='cocktail-img' />
        </div>
        <div className='strip-info'>
          <h3>{name}</h3>
          <h4>{glass}</h4>
        </div>
      </div>
      <div className='strip-btn-container'>
        <span
          className='remove-btn'
          onClick={() => {
            dispatch({ type: 'REMOVE_ITEM', payload: id })
            toast.error(state.toastMessage, {
              duration: 2000,
            })
            console.log(state)
          }}
        >
          remove
        </span>
        <Link to='/CocktailDetailPage'>
          <button
            className='strip-btn-detail'
            onClick={() => {
              setCheckId(id)
            }}
          >
            Detail
          </button>
        </Link>
      </div>
    </article>
  )
}
