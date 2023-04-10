import React, { useEffect } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
const RedirectPage = ({ location }) => {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const url = searchParams.get('url')

    if (url) {
      window.location.replace(url)
    }
  }, [location.search])

  return (
    <Layout>
        <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">URL Redirect</h1>
      <p class="mt-2 text-sm font-semibold text-gray-400">Ex: http://www.example.com/redirect/?url=[YOUR_URL]</p>
      </div>  
    
    </Layout>
  )
}

export const Head = () => <Seo title="URL Redirect" description="Redirect urls from our website." />


export default RedirectPage
