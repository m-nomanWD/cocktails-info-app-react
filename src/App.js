import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CocktailDetailPage from './pages/CocktailDetailPage'
import Error404 from './pages/Error404'
import FavListPage from './pages/FavListPage'
import toast, { Toaster, ToastBar } from 'react-hot-toast'

function App() {
  const { checkId } = useGlobalContext()
  return (
    <>
      <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? 'custom-enter 1s ease'
                : 'custom-exit 1s ease',
            }}
          />
        )}
      </Toaster>
      ;
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='cocktailDetailPage' element={<CocktailDetailPage />} />
            <Route path='/favListPage' element={<FavListPage />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
