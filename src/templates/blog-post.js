import React from "react";

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {


  const schemaimage = site.siteMetadata.siteUrl + ( post.frontmatter.preview ||  site.siteMetadata.defaultOpenGraphImage )

  const siteTitle = site.siteMetadata?.title || `Title`
  return (
    
    
    <Layout location={location} title={siteTitle}>
      
      <TypographyStyle typography={typography}/>
    
      	
      <div class="container mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6">
    <article itemscope itemtype="https://schema.org/Article">

<header class="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" class="no-typography text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{post.frontmatter.title}</h1>
        <time itemprop="datePublished" class="mt-2 text-sm  font-semibold text-gray-400" datetime={post.frontmatter.date}>{post.frontmatter.date}</time>
    </header>
    <meta itemprop="image" content={schemaimage} />

    
      <div className="">
      <section
      itemprop="articleBody"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="pb-5">
        {post.frontmatter.tags && post.frontmatter.tags.slice(0, 3).map((tag, index) => (
               <span class="mr-1.5 rounded-full px-3 py-1 bg-purple-800 ">
              <Link to={`/topic/${tag}`} key={tag} className="text-white">  {tag}</Link>
                </span>

                ))}
                </div>
        <hr />
      </div>
      <footer>
          <Bio />
        </footer>
    </article>
    
    
       
  </div>
  
</div>















    
<nav className="blog-post-nav">
        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: `10px`,
            marginTop: `10px`,
          }}
        >
          <div>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-5">
                ←  Previous
              </Link>
            )}
          </div>
          <div>
            {next && (

<Link to={next.fields.slug} rel="next" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
Next →
</Link>
            )}
          </div>
        </div>
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
        tags
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
