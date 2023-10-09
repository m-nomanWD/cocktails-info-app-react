import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function CocktailCard({ item }) {
  const { id, name, img, info, glass } = item

  return (
    <article className='cocktail-card' key={id}>
      <div className='cocktail-img'>
        <img src={img} alt='product img' />
      </div>
      <div className='cocktail-info'>
        <div className='cocktail-info-text'>
          <h2>{name}</h2>
          <h3>{glass} </h3>
          <h5>{info}</h5>
        </div>
        <div className='button-container'>
          <Link to='/cocktailDetailPage' className='link'>
            <button>Detail</button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CocktailCard
