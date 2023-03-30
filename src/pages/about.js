import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
    <div>
      <h1>Welcome to my Gatsby page!</h1>
      <p>This is a simple Gatsby page.</p>
      <Link to="/about">About</Link>
    </div></Layout>
  )
}
export const Head = () => <Seo title="About" />

export default IndexPage
