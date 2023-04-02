import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  
  return (
    <>







    <div className="relative  bg-gray-50">
      <Header />
      <div
      
  className=" headerpattern absolute inset-0 h-56 opacity-90 lg:h-56">

  </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 sm:px-12 lg:pt-20">
     
      <main>{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Layout
