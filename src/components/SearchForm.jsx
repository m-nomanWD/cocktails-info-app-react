import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export class SearchForm extends Component {
  render() {
    return (
      <>
        <main>
          <article className='form-container'>
            <form
              action=''
              onSubmit={(e) => {
                e.preventDefault()
                toast('🦄 Wow so easy!', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'light',
                })
              }}
            >
              <input type='text' placeholder='Search' className='form-input' />
              <button type='submit' className='form-button '>
                Search
              </button>
            </form>
          </article>
        </main>
      </>
    )
  }
}

export default SearchForm
