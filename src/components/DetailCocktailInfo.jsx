import React from 'react'
import { useGlobalContext } from '../context'
import { Link, useParams } from 'react-router-dom'

export default function DetailCocktailInfo() {
  const { id } = useParams()

  const { checkId, data } = useGlobalContext()

  const detailedCocktail = data.find((item) => item.id === id)

  const { name, img, glass, info, instructions } = detailedCocktail

  return (
    <>
      <Link
        to={'/'}
        className='button-container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
          marginTop: '1rem',
        }}
      >
        <button style={{ width: '140px' }} className='detail-btn'>
          Home Page
        </button>
      </Link>

      <article className='cocktail-detail'>
        <div className='detail-cocktail-img'>
          <img src={img} alt='' />
        </div>
        <div className='detail-cocktail-info'>
          <h2>{name}</h2>
          <h3>{glass}</h3>
          <h5>{info}</h5>
          <p>{instructions}</p>
        </div>
      </article>
    </>
  )
}
