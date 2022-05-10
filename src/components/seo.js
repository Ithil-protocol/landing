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

import favicon from "../assets/images/favicon.ico"
import favicon32 from "../assets/images/favicon-32x32.png"
import favicon16 from "../assets/images/favicon-16x16.png"
import favicon96 from "../assets/images/favicon-96x96.png"
import favicon72 from "../assets/images/apple-icon-72x72.png"

function SEO({ title, description, image, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
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

  const metaTags = [
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
  ].concat(meta || [])

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
    >
      <script type="application/ld+json">{JSON.stringify(structuredContent)}</script>
      <meta name="msapplication-TileColor" content="#151A29" />
      <meta name="theme-color" content="#151A29" />
      <link rel={"apple-touch-icon"} sizes={"72x72"} href={favicon72} />
      <link rel={"icon"} type={"image/png"} sizes={"32x32"} href={favicon32}/>
      <link rel={"icon"} type={"image/png"} sizes={"96x96"} href={favicon96}/>
      <link rel={"icon"} type={"image/png"} sizes={"96x96"} href={favicon96}/>
      <link rel={"icon"} type={"image/png"} sizes={"16x16"} href={favicon16}/>
      <link rel={"icon"} href={favicon}/>
      {metaTags.map((meta) =>  {
          return (<meta key={meta.name} name={meta.name} content={meta.content} />)
        }
      )}
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
