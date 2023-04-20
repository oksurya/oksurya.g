/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from '@reach/router'

function SEO({ description, lang, meta, image, title, schemaMarkup }) {
  const { site } = useStaticQuery(
    graphql`
    query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author{
                url
                name
                summary
              }
            defaultOpenGraphImage
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description


  const ogImageUrl = site.siteMetadata.siteUrl + ( image ||  site.siteMetadata.defaultOpenGraphImage )
  const ogUrl = site.siteMetadata.siteUrl + useLocation().pathname;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `google`,
          content: 'nositelinkssearchbox',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
            property: `og:image`,
            content: ogImageUrl,
          },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.url,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}


    >
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO