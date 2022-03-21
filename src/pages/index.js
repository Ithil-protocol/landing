import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Txt } from "../components/Txt"
import 'twin.macro'
import tw from 'twin.macro'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Txt.Heading2 tw="text-primary">Heading 2</Txt.Heading2>
  </Layout>
)

export default IndexPage
