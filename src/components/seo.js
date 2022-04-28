/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, image, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
          }
        }
      }
    `
  )

  const structuredContent = {
    '@context': 'http://schema.org',
        '@type': 'Corporation',
        '@id': 'https://ithil.fi/',
        'name': 'Ithil',
        'alternateName': 'Ithil',
        'url': 'https://ithil.fi/',
        'email': 'info@ithil.fi',
        'slogan': description,
        'logo': {
            '@type': 'ImageObject',
            'width': 118,
            'height': 32,
            'url': image
        },
        'copyrightHolder': {
            '@type': 'Organization',
            'name': 'Ithil',
            'url': 'https://ithil.fi/'
        },
        'copyrightYear': '2022',
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://ithil.fi/'
        },
        'sameAs': [
            'https://github.com/Ithil-protocol/',
            'https://twitter.com/ithil_protocol/'
        ]
  }

  const lang = "en_US";
  const defaultTitle = title || site.siteMetadata?.title
  const metaDescription = description || site.siteMetadata.description
  const canonical = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(structuredContent)}</script>
      <meta name="msapplication-TileColor" content="#151A29" />
      <meta name="theme-color" content="#151A29" />
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
