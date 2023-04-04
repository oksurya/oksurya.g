import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
     
    <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Contact</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Fill this form to contact us.</p>
    </header>
    <div class="mx-auto mt-12 max-w-xl">
    <form action="https://getform.io/f/ac7847d2-6327-4de0-8ee4-fb19e14fb743" method="POST" class="flex flex-col space-y-4">
    <input type="text" name="name" class="border border-gray-300 rounded-md p-2" placeholder="Name"/>
    <input type="email" name="email" class="border border-gray-300 rounded-md p-2" placeholder="Email"/>
    <textarea type="text" name="message" class="border border-gray-300 rounded-md p-2" placeholder="Message"></textarea>
    
    <input type="hidden" name="_gotcha" />
        
    <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Send</button>
</form>
       
</div>

    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
