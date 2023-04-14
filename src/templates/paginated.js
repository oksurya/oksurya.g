import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const PaginatedTemplate = ({ pageContext }) => {
  const {  group, index, first, last } = pageContext
  const previousIndex = index - 1
  const nextIndex = index + 1

  const previousPageUrl =
    previousIndex === 1 ? "/blog" : `/blog/${previousIndex}`
  const nextPageUrl = `/blog/${nextIndex}`
  const Title = "Blog"
  const Description = "Latest news tech tricks."

  return (
    <Layout>




              <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{Title}</h1>
      <p class="mt-2 text-sm font-semibold trueGray-600">{Description}</p>
      </div>
            
           
   <div className="mt-10 mb-5">
            {group.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
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
          )
        })}
</div>

   <nav aria-label="Pagination">
   
   <ul className="border-t" style={{
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
  paddingTop: `10px`
}}>
        {!first && (
          <Link to={previousPageUrl} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
    </svg> &nbsp; Previous
          </Link>
        )}

<a class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" rel="prev" href="/">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
    </svg> &nbsp; Home</a>

        {!last && (
          <Link to={nextPageUrl} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next Page &nbsp; 
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
      </path>
      </svg>
          </Link>
        )}
        </ul>
     </nav>
    </Layout>
  )
}
export const Head = () => <Seo title="Blog" description="Read our latest blog posts and stay up-to-date with the latest trends in technology, business, and lifestyle. Our blog covers a wide range of topics and provides insightful analysis, helpful tips, and inspiring stories. Join our community and start exploring today."/>

export default PaginatedTemplate
