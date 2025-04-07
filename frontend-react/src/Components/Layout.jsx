import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainPage from '../MainPage'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-4">
        {children || <MainPage />}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
