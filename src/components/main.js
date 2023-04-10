import * as React from "react"
import { Link } from "gatsby"

const MainPage = ({ children }) => {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
{children}
    </main>
  )
}

export default MainPage
