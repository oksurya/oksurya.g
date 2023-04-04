import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
const AllTags = ({ data }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <Layout>

    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">All Topics</h1>
      <p class="mt-2 text-sm font-semibold trueGray-600"></p>
      </div>


      <div class="mt-6 items-center text-xs font-medium sm:flex">
      {tags.map((tag) => (
        <Link className="mr-1.5 rounded-full px-3 py-1 bg-purple-100 text-purple-800" to={`/topic/${tag.fieldValue}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
         ))}
        </div>




   
    </Layout>
  )
}

export const query = graphql`
  query Alltags{
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default AllTags
