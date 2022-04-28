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

function SEO({ description, lang, meta, title }) {
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
        'slogan': 'Ithil is a DeFi Swiss knife that allows anyone to use all available protocols and tools to earn thanks to their ability rather than their capital.',
        'logo': {
            '@type': 'ImageObject',
            'width': 118,
            'height': 32,
            'url': 'https://ithil.fi/logo.svg'
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

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const canonical = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
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
          content: title,
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
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
      <script type="application/ld+json">{JSON.stringify(structuredContent)}</script>
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
