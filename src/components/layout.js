import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  
  return (
    <>
    <div className="relative  bg-gray-50">
      <Header />
      
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-32 sm:px-12 lg:pt-24">

      <main>{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Layout
