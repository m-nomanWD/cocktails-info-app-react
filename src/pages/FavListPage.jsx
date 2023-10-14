import React from 'react'
import FavItemStrip from '../components/FavItemStrip'

import { useGlobalContext } from '../context'

export default function FavListPage() {
  const { state } = useGlobalContext()
  const { cocktails } = state
  console.log(cocktails)
  if (cocktails.length !== 0) {
    return (
      <>
        <section>
          <h1 className='fav-list-heading'>Fav Cocktail List</h1>
          {cocktails.map((cocktail) => {
            return <FavItemStrip cocktail={cocktail} key={cocktail.id} />
          })}
        </section>
      </>
    )
  } else {
    return (
      <>
        <h1
          style={{ fontFamily: 'Nanum Myeongho' }}
          className='fav-list-heading'
        >
          Fav Cocktail List
        </h1>
        <div
          style={{
            height: '50vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            color: 'gray',
            fontSize: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'capitalize',
          }}
        >
          <img
            style={{
              width: '100px',
              marginBottom: '1rem',
            }}
            src='/heart.png'
            alt=''
          />
          <h5 className='fav-list-empty'>no item is the fav list</h5>
        </div>
      </>
    )
  }
}
