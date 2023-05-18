/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql} from "gatsby"
import { useLocation } from '@reach/router'

const Seo = ({ description, title, image, children, schemaMarkup }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
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
  const defaultTitle = site.siteMetadata?.title

    const ogImageUrl = site.siteMetadata.siteUrl + ( image ||  site.siteMetadata.defaultOpenGraphImage )
    const ogUrl = site.siteMetadata.siteUrl + useLocation().pathname;
  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

      <meta name="description" content={metaDescription} />
      <meta property="image" content={ogImageUrl} />
      <link rel="canonical" href={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="YTd6-dnyBV97B1MkEh1ggOFfWArSRbZaOLofjO6Q8jM" />
      <meta name="google-site-verification" content="PmqYy-itIqkvpxnnLvuhaSSF4nYeNLdp91Br-47ERas" />
      <meta property="twitter:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
      {children}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8969631451621170"
     crossorigin="anonymous"></script>
    </>
  )
}

export default Seo
