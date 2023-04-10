import React from "react";

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {



  const siteTitle = site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <TypographyStyle typography={typography}/>


      <div class="container mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <article         className=""
        itemScope
        itemType="http://schema.org/Article">
      <header class="py-8">
        
        <h1 class="text-4xl font-bold leading-tight">{post.frontmatter.title}</h1>
        <div class="text-gray-600 text-sm mt-2">
          <time datetime="{{ article.date }}">{post.frontmatter.date}</time>
        </div>
      </header>
      <div className="prose-lg">
      <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </div>
    </article>
    
    <footer>
          <Bio />
        </footer>
       
  </div>
  
</div>















    
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: `10px`,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-5">
                ←  Previous
              </Link>
            )}
          </li>
          <li>
            {next && (

<Link to={next.fields.slug} rel="next" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
Next →
</Link>
            )}
          </li>
        </ul>
      </nav>
      
            
              
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      image={post.frontmatter.preview}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      tableOfContents(absolute: false)
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        preview
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
