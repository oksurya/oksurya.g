import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const TagTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { tag } = pageContext

  return (
    <Layout location={location} title={siteTitle}>


<div class="mx-auto max-w-2xl text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{tag}</h1>
      <p class="mt-2 text-sm font-semibold trueGray-600">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
      </div>

      <div class="mx-auto my-4 max-w-5xl"></div>
      <div class="grid gap-8 md:grid-cols-3 md:gap-x-12 md:gap-y-12">
      {posts.map(post => {
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <div className="border-t pt-8" key={post.fields.slug}>
      <div className="flex space-x-1 text-xs text-gray-500"><time>{post.frontmatter.date}</time></div>

      <Link className="mt-2 block" to={post.fields.slug} itemProp="url">
        <p className="text-base font-semibold leading-tight tracking-tight text-gray-700 hover:text-gray-900 sm:text-lg md:text-xl">{title}</p>

        <p className="mt-3 sm:flex text-sm hidden text-gray-500 sm:line-clamp-2" itemProp="description">{post.frontmatter.description}</p>

       
<div class="mt-6 hidden items-center text-xs font-medium sm:flex">
{post.frontmatter.tags && post.frontmatter.tags.slice(0, 3).map((tag, index) => (
           <span class="mr-1.5 rounded-full px-3 py-1 bg-purple-100 text-purple-800">
           <Link to={`/topic/${tag}`} key={tag}>  {tag}</Link>
             </span>
          ))}
        </div>
      </Link>
    </div>
  )
})}

      </div>
    </Layout>
  )
}

export const Head = ({ pageContext }) => {
  const { tag } = pageContext

  return <Seo title={`Discover ${tag}: Tech Guides and Tutorials`} />
}

export default TagTemplate

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          tags
        }
      }
    }
  }
`