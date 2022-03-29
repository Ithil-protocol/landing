import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Txt } from "../components/Txt"
import 'twin.macro'
import tw from 'twin.macro'
import { Button } from "../components/Button"
import { BookOpen } from "phosphor-react"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div tw="h-[calc(100% - 100px)] w-full flex flex-col tablet:flex-row justify-center items-center gap-20">
      <div tw="flex flex-col w-full tablet:w-4/5 tablet:w-2/5 gap-10">
        <Txt.Section>DeFi made <i>easy</i></Txt.Section>
        <Txt.Body2Regular tw="text-font-200">To experienced traders and DeFi newcomers entering the market or looking for customizable investment strategies, our DeFi protocol offers simplified and reliable leveraged staking and trading strategies for any token, because we believe in simplicity and guidance in the complex Defi universe.</Txt.Body2Regular>
        <div tw="flex flex-row m-4 gap-3 ml-0 self-center tablet:self-start mt-10">
          <Button text='Start investing' bold />
          <Button text='Docs' bold action leftIcon={BookOpen} />
        </div>
      </div>
      <div tw="w-4/5 tablet:w-2/5 bg-font-200 h-3/5 opacity-30">

      </div>
    </div>
  </Layout>
)

export default IndexPage
