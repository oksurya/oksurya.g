import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
     
    <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">404 Error</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">This page does not exist.</p>
    </header>
    <div class="mx-auto mt-12 max-w-xl">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500">Popular pages</h2>
        <ul class="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
            <li class="relative flex items-start space-x-4 py-6">
                <div class="flex-shrink-0"><span class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  
                <svg class="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>                  
                  </span></div>
                <div
                    class="min-w-0 flex-1">
                    <h3 class="text-base font-medium text-gray-900">
                      <span class="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                        <a target="_blank" rel="noopener noreferrer " href="https://twitter.com/jayasuryatweet" class="focus:outline-none">
                          <span class="absolute inset-0" aria-hidden="true"></span>Follow on Twitter</a>
                        </span>
                    </h3>
                    <p class="text-base text-gray-500">For daily updates on my life and work, be sure to follow me on Twitter.</p>
    </div>
    <div class="flex-shrink-0 self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg></div>
    </li>
    <li class="relative py-6 flex items-start space-x-4">
            <div class="flex-shrink-0">
              <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
              <svg class="h-8 w-8 text-yellow-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 11a9 9 0 0 1 9 9" />  <path d="M4 4a16 16 0 0 1 16 16" />  <circle cx="5" cy="19" r="1" /></svg>
              </span>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base font-medium text-gray-900">
                <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <a href="/blog" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Blog
                  </a>
                </span>
              </h3>
              <p class="text-base text-gray-500">Access the most recent news and articles.</p>
            </div>
            <div class="flex-shrink-0 self-center">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </li>
</ul>
<div class="mt-8 hidden">
  <a target="_blank" rel="noopener noreferrer " href="/support" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Send us an email for help<span aria-hidden="true"> →</span></a></div>
</div>

    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

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
