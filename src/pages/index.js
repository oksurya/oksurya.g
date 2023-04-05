import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const Description = data.site.siteMetadata.description

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>

    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{data.site.siteMetadata.title}</h1>
      <p class="mt-2 text-sm font-semibold trueGray-600">{Description}</p>
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

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Discover the Latest Tech Trends with Our Expert Tips and Tutorials" description="Join us on a journey of discovery as we explore the cutting-edge of technology together." />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
        homepagetitle
        social {
          twitter
        }
        author {
          name
          summary
        }
      }
    }
  
    allMarkdownRemark(limit: 6, sort: {frontmatter: {date: DESC}})

    {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`