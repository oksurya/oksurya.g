import * as React from "react"
import { Link, graphql } from "gatsby"
import '../styles/s.css'
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {

  const siteTitle = site.siteMetadata?.title || `Title`
const author = site.siteMetadata.author.name
  return (
    <Layout location={location} title={siteTitle}>


<div class="mx-auto -my-12 xl:px-12">
    <article class="relative mx-auto max-w-3xl pt-10 xl:grid xl:max-w-none xl:grid-cols-[1fr_50rem] xl:gap-x-8">
        <h1 class="col-span-full text-3xl font-extrabold tracking-tight text-slate-900 sm:text-center sm:text-4xl xl:mb-16">{post.frontmatter.title}</h1>
        <div class="mb-16 text-sm leading-6 xl:mb-0">
            <div class="mb-5 hidden border-b border-slate-200 pb-5 xl:block"><Link className="group flex font-semibold text-slate-700 hover:text-slate-900" to="/"><svg viewBox="0 -9 3 24" class="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600"><path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Home</Link></div>
            <dl>
                <dd class="absolute inset-x-0 top-0 text-slate-700 sm:text-center"><time>{post.frontmatter.date}</time></dd>
                <div class="sm:flex sm:flex-wrap sm:justify-center xl:block">
                    <dd class="mt-6 flex items-center font-medium sm:mx-3 xl:mx-0">
                      <img src="https://pbs.twimg.com/profile_images/1595420759165632512/zlS7jyNx_400x400.jpg" alt="Jayasurya Mailsamy" class="mr-3 h-10 w-10 rounded-full" loading="lazy"/>
                        <div>
                            <div class="text-slate-900"><Link className="hover:text-sky-500" to="/about">{author}</Link></div><a target="_blank" rel="noopener noreferrer " href="https://twitter.com/jayasuryatweet" class="text-slate-500 hover:text-sky-500">@oksurya</a></div>
                    </dd>
                </div>
            </dl>
            
              </div>
        <div>
            <div class="prose prose-slate max-w-full">
            <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
                  />

            </div>
            <div class="flex gap-x-2 pt-10 text-sm font-semibold">

            
        
          {post.frontmatter.tags && post.frontmatter.tags.map((tag, index) => (
         <Link to={`/topic/${tag}`} key={tag}><span class="mr-1.5 rounded-full px-3 py-1 bg-purple-100 text-purple-800">{tag}</span></Link>

          ))}
        </div>
        </div>
    </article>
</div>





        
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
