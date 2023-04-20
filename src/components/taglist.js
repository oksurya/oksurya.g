import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query Alltags {
      site {
        siteMetadata {
          title
          siteUrl
          defaultOpenGraphImage
          author {
            url
            name
            summary
            twitter
          }
        }
      }
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const ToolsList = ({ tags, siteUrl }) => {
    return (
      <>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "Explore Topics",
            "itemListElement": ${JSON.stringify(
              tags.map((tag, index) => ({
                "@type": "SiteNavigationElement",
                "position": index + 1,
                "name": tag.fieldValue,
                "url": `${siteUrl}/topic/${tag.fieldValue}/`
              }))
            )}
          }
        `}
        </script>
        <div>
          <p className="px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Explore topics</p>
          {tags.map((tag) => (
            <Link className="w-full block px-4 py-2 border-b text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" to={`/topic/${tag.fieldValue}`}>
              <span className="focus:text-gray-400 hover:text-purple-800 text-gray-600 truncate"> {tag.fieldValue} ({tag.totalCount})</span>
            </Link>
          ))}
        </div>
      </>
    )
  }

  const site = data.site.siteMetadata
  const tags = data.allMarkdownRemark.group
  const siteUrl = site.siteUrl

  return <ToolsList tags={tags} siteUrl={siteUrl} />
}

export default Menu
