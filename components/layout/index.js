import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
