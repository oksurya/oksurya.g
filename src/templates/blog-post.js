import React from "react";

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Postseo from "../components/seo"
import slugify from 'slugify'

import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'


const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {

  const siteTitle = site.siteMetadata?.title || `Title`

  const postdate = post.frontmatter.date
const formattedDate = new Date(postdate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});



 
  return (
    
   
   
    
    <Layout location={location} title={siteTitle}>

           

      <TypographyStyle typography={typography}/>
    
      	
      <div class="container mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6">
    <article>

<header class="border-b mx-auto max-w-2xl text-center">
        <h1 itemprop="headline" class="no-typography font-bold">{post.frontmatter.title}</h1>
        <p itemprop="datePublished" class="mt-2 text-sm  font-semibold text-gray-500">Last updated: {formattedDate}</p>
        
    </header>

    
      <div className="pt-5">
      <section
      itemprop="articleBody"
      className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="pb-5 ">
        {post.frontmatter.tags && post.frontmatter.tags.slice(0, 3).map((tag, index) => (
               <span class="mr-1.5 rounded-full px-3 py-1 bg-purple-800 ">
              <Link to={`/topic/${slugify(tag.toLowerCase())}`} key={tag} className="text-white">  {tag}</Link>
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


export default BlogPostTemplate
export 

const Head = ({ data: { site, markdownRemark: post } }) => {
  
  const schemaimage = site.siteMetadata.siteUrl + ( post.frontmatter.preview ||  site.siteMetadata.defaultOpenGraphImage )
  const postdate = post.frontmatter.date
  const isoDate = new Date(postdate).toISOString();
  const schema = {
    
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.frontmatter.title,
    "image": schemaimage,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": [{
        "@type": "Person",
        "name": site.siteMetadata.author.name,
        "url": site.siteMetadata.author.url
      }]
  
}
  return (
    <Postseo 
  title={post.frontmatter.title}
  description={post.frontmatter.description || post.excerpt}
  image={post.frontmatter.preview}
schemaMarkup={schema} 
/>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        defaultOpenGraphImage
        author{
          url
          name
          summary
          twitter
        }
        
      }
    }
    markdownRemark(id: { eq: $id }) {
      tableOfContents(absolute: false)
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
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
