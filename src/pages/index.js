import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
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
      
      
      {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
<>
<div class="border-t p-3">
<div class="flex space-x-1 text-xs text-gray-500">
<time>{post.frontmatter.date}</time></div>
<Link to={post.fields.slug} itemProp="url" class="mt-2 block">
<p class="text-base font-semibold leading-tight tracking-tight text-gray-700 hover:text-gray-900 sm:text-lg md:text-xl">{title}</p>
<p className="mt-3 hidden text-sm text-gray-500 sm:line-clamp-2" dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt, }} itemProp="description" />
</Link>

<div class="mt-6 hidden items-center text-xs font-medium sm:flex">
{post.frontmatter.tags && post.frontmatter.tags.slice(0, 3).map((tag, index) => (
           <span class="mr-1.5 rounded-full px-3 py-1 bg-purple-100 text-purple-800">
           <Link to={`/topic/${tag}`} key={tag}>  {tag}</Link>
             </span>
          ))}
        </div>

</div>






      
</>
)
        })}





        
    
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Discover the Latest Tech Trends with Our Expert Tips and Tutorials" 
description="Join us on a journey of discovery as we explore the cutting-edge of technology together."
image="" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
