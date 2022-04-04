import React from "react"
import PropTypes from "prop-types"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Txt } from "../components/Txt"
import 'twin.macro'
import { Button } from "../components/Button"
import { BookOpen } from "phosphor-react"
//@ts-ignore
import CoinIcon from "../assets/images/coinIcon.svg"
//@ts-ignore
import EtherIcon from "../assets/images/ether.png"
//@ts-ignore
import WrappedEtherIcon from "../assets/images/weth.png"
//@ts-ignore
import WrappedBitconIcon from "../assets/images/wbtc.png"
//@ts-ignore
import TetherUsdIcon from "../assets/images/usdt.png"
//@ts-ignore
import DaiStablecoinIcon from "../assets/images/dai.png"
import Feature from "../components/Feature"
import Strategy from "../components/Strategy"
import Token from "../components/Token"

// import LogoDark from '../assets/images/logoFullDark.svg'

const IndexPage = () => (
  <>
  <Layout>
    {/* <SEO title="Home" /> */}
    <div tw="h-screen flex flex-col desktop:flex-row justify-between items-center gap-20 my-20 desktop:my-0">
      <div tw="flex flex-col w-full tablet:w-4/5 gap-4 desktop:gap-10 justify-start tablet:items-center desktop:items-start">
        <Txt.Section>Leverage to <i>earn</i></Txt.Section>
        <Txt.Body1Regular tw="text-font-200 text-left tablet:text-center desktop:text-left ">To experienced traders and DeFi newcomers entering the market or looking for customizable investment strategies, our DeFi protocol offers simplified and reliable leveraged staking and trading strategies for any token, because we believe in simplicity and guidance in the complex Defi universe.</Txt.Body1Regular>
        <div tw="flex flex-row  gap-3 ml-0 self-start tablet:self-center desktop:self-start mt-10 w-full justify-center desktop:justify-start">
          <Button tw="width[50%] tablet:w-auto" text='Start investing' bold />
          <Button tw="width[50%] tablet:w-auto" text='Docs' bold action leftIcon={BookOpen} />
        </div>
      </div>
      <div tw="w-full tablet:w-1/2 min-width[50%] bg-font-200 h-3/5 opacity-30"></div>
    </div>
    <div tw="h-screen w-full flex flex-col desktop:flex-row justify-between items-center gap-20 my-20 desktop:my-0">
      <div tw="w-full tablet:w-1/2 min-width[50%] bg-font-200 h-3/5 opacity-30 hidden desktop:block"></div>
      <div tw="flex flex-col w-full tablet:w-4/5 gap-4 desktop:gap-10 justify-start tablet:items-center desktop:items-start">
        <Txt.Section>How it works</Txt.Section>
        <Txt.Body1Regular tw="text-font-200 text-left tablet:text-center desktop:text-left ">Traders can use LPs’ liquidity to perform leveraged investments and earn a lot, LPs’ get fees from this, liquidators assure liquidity is not attacked.</Txt.Body1Regular>
        <div tw="flex flex-col m-4 gap-5 ml-0  desktop:self-start mt-8">
          <Feature icon={CoinIcon} text='High APY Staking' />
          <Feature icon={CoinIcon} text='Efficient framework of liquidation systems' />
          <Feature icon={CoinIcon} text='Leveraged investments' />
          <Feature icon={CoinIcon} text='Insurance reserve to secure liquidity' />
        </div>
      </div>
      <div tw="w-full tablet:w-1/2 min-width[50%] bg-font-200 h-3/5 opacity-30 block desktop:hidden"></div>
    </div>

    <div tw="flex flex-col gap-10 desktop:gap-20 my-20 desktop:my-0 justify-start tablet:items-center desktop:items-start">
      <Txt.Section>Available strategies</Txt.Section>
      <div tw="flex flex-col tablet:flex-row gap-10">
        <Strategy />
        <Strategy />
      </div>
    </div>
  </Layout>
  
<div tw="flex flex-row bg-primary-100 min-h-screen w-full">
        <div
          tw="max-w-1920 w-full tablet:w-[calc(100% - 3rem)] my-6 mx-4 tablet:mx-24"
        >
          <div tw="w-full flex flex-col desktop:flex-row gap-10 desktop:gap-20 my-20 justify-start tablet:items-center desktop:items-start bg-primary-100">
  <div tw="w-full flex justify-center desktop:justify-start desktop:w-1/3">
    <Txt.Section tw="text-secondary desktop:w-24">Supported tokens</Txt.Section>
  </div>
  <div tw=" w-full desktop:w-2/3 flex flex-col tablet:flex-row">
    <div tw="flex flex-wrap justify-center desktop:justify-start gap-3 tablet:gap-6 desktop:gap-10">
    <Token
    tokenName="Ether"
    tokenSymbol="ETH"
    apy="10%"
    icon={EtherIcon}
    />
    <Token
    tokenName="Wrapped Ether"
    tokenSymbol="WETH"
    apy="12%"
    icon={WrappedEtherIcon}
    />
    <Token
    tokenName="DAI Stablecoin"
    tokenSymbol="DAI"
    apy="12%"
    icon={DaiStablecoinIcon}
    />
    <Token
    tokenName="Wrapped Bitcoin"
    tokenSymbol="WBTC"
    apy="8%"
    icon={WrappedBitconIcon}
    />
    <Token
    tokenName="Tether USD"
    tokenSymbol="USDT"
    apy="10%"
    icon={TetherUsdIcon}
    />
    </div>
  </div>
</div>
        </div>
      </div>
</>

)

export default IndexPage
