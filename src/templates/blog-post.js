import * as React from "react"
import { Link, graphql } from "gatsby"
import '../styles/s.css'
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const siteTitle = site.siteMetadata?.title || `Title`
const author = site.siteMetadata.author.name
  return (
    <Layout location={location} title={siteTitle}>
          <article
        className="font-sans	"
        itemScope
        itemType="http://schema.org/Article"
      >
<div class="mx-auto max-w-2xl text-center"><h1 itemProp="headline" class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{post.frontmatter.title}</h1>
<p class="mt-2 text-sm font-semibold text-gray-400">{post.frontmatter.date}</p>
<p class="mt-2 text-sm font-semibold text-gray-500">by {author} {url}</p></div>
<div class="min-h-full	 bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
  <div class="absolute inset-0 bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative w-full px-2 py-5   shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="max-w-3xl prose mx-auto lg:text-lg">

       
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        
      
      
      
        <div class="flex gap-x-2 pt-8 text-sm font-semibold">
          {post.frontmatter.tags && post.frontmatter.tags.map((tag, index) => (
         <span class="mr-1.5 rounded-full px-3 py-1 bg-purple-100 text-purple-800">{tag}</span>
          ))}
        </div>
      
       






    


      
    </div>
    
  </div> 
</div>

      </article>

<nav class="mt-12 flex items-center justify-between border-t border-gray-200 px-4 pt-12 sm:px-6" aria-label="Pagination">

{previous && (
<Link to={previous.fields.slug} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" rel="prev">

<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
    </svg>&nbsp; Previous Post
              </Link>
            )}
          
            {next && (
              <Link to={next.fields.slug} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" rel="next">
               Next Post&nbsp;<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
      </path>
      </svg> 
      
              </Link>
              
            )}
</nav>

    </Layout>
  )
}

export const Head = ({ data: { site, markdownRemark: post }, location }) => {
  const fullUrl = `${site.siteMetadata.siteUrl}`
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      image={post.frontmatter.preview || "/images/default.png"}
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
        siteUrl
        author{
          name
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
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
