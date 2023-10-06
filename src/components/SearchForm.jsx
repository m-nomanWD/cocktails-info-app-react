import React, { Component } from 'react'

export class SearchForm extends Component {
  render() {
    return (
      <>
        <main>
          <article className='form-container'>
            <form action=''>
              <input type='text' placeholder='Search' className='form-input' />
              <button type='submit' className='form-button'>
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
