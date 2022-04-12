import "twin.macro"
import "twin.macro"

import { DiscordLogo, GithubLogo, Plus } from "phosphor-react"
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import { Asset } from "../components/Asset"
import { BookOpen } from "phosphor-react"
import { Button } from "../components/Button"
//@ts-ignore
import CoinIcon from "../assets/images/coinIcon.svg"
//@ts-ignore
import DaiStablecoinIcon from "../assets/images/dai.png"
//@ts-ignore
import DiscordIcon from "../assets/images/discord.svg"
//@ts-ignore
import EtherIcon from "../assets/images/ether.png"
//@ts-ignore
import EthereumIcon from "../assets/images/eth.png"
import Feature from "../components/Feature"
//@ts-ignore
import GithubIcon from "../assets/images/github.svg"
// import { ParallaxProvider, Parallax } from "react-scroll-parallax"
// @ts-ignore
import IthilBackground from "../assets/images/bgSvg.svg"
import Layout from "../components/Layout"
import { Link } from "gatsby"
//@ts-ignore
import LogoDark from "../assets/images/logoFullDark.svg"
//@ts-ignore
import MediumIcon from "../assets/images/medium.svg"
// import LogoDark from '../assets/images/logoFullDark.svg'
import Partner from "../components/Partner"
//@ts-ignore
import PartnerPlaceholer from "../assets/images/ithil.svg"
import PropTypes from "prop-types"
import React from "react"
import SEO from "../components/seo"
import { SocialLink } from "../components/SocialLink"
import Strategy from "../components/Strategy"
//@ts-ignore
import TetherUsdIcon from "../assets/images/usdt.png"
import Token from "../components/Token"
//@ts-ignore
import TwitterIcon from "../assets/images/twitter.svg"
import { Txt } from "../components/Txt"
//@ts-ignore
import WrappedBitconIcon from "../assets/images/wbtc.png"
//@ts-ignore
import WrappedEtherIcon from "../assets/images/weth.png"
import tw from "twin.macro"
import { withPrefix } from "gatsby"

// import { Parallax } from 'react-parallax';

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <>
        <Layout header>
          {/* <SEO title="Home" /> */}
          <div tw="w-full my-20 z-10">
            <div tw="flex flex-col gap-10 w-full tablet:w-9/12 desktop:w-7/12">
              <Txt.Section tw="">DeFi made easy</Txt.Section>
              <Txt.Body1Regular tw="text-primary-100">
                To experienced traders and DeFi newcomers entering the market or
                looking for customizable investment strategies, our DeFi
                protocol offers simplified and reliable leveraged staking and
                trading strategies for any token, because we believe in
                simplicity and guidance in the complex Defi universe.
              </Txt.Body1Regular>
              <div tw="flex flex-row  gap-3 ml-0 self-start mt-10 w-full justify-start">
                <Button
                  tw="width[50%] tablet:w-auto self-start"
                  text="Start investing"
                  bold
                />
                <Button
                  tw="width[50%] tablet:w-auto tablet:self-start"
                  text="Docs"
                  bold
                  action
                  leftIcon={BookOpen}
                />
              </div>
            </div>
          </div>
        </Layout>
        <ParallaxBanner
          className="aspect-[2/1]"
          layers={[
            { image: "./banner/base.svg", speed: 0 },
            { image: "./banner/layer-1.svg", speed: -10 },
            { image: "./banner/layer-2.svg", speed: -5 },
            { image: "./banner/layer-3.svg", speed: 5 },
            {
              shouldAlwaysCompleteAnimation: true,
              expanded: false,

              children: (
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(21, 26, 41, 1) 0%, rgba(21, 26, 41, 0) 15%, rgba(21, 26, 41, 0) 80%, rgba(21, 26, 41, 1) 100%)",
                  }}
                />
              ),
            },
          ]}
        />
        <Layout>
          <div tw="h-screen w-full flex flex-col desktop:flex-row justify-between items-center gap-20 my-20 desktop:my-0">
            <div tw="w-full min-width[50%] bg-font-200 h-3/5 opacity-30 hidden desktop:block"></div>
            <div tw="flex flex-col w-full gap-4 desktop:gap-10 justify-start">
              <Txt.Section>How it works</Txt.Section>
              <Txt.Body1Regular tw="text-font-200 text-left">
                Traders can use LPs’ liquidity to perform leveraged investments
                and earn a lot, LPs’ get fees from this, liquidators assure
                liquidity is not attacked.
              </Txt.Body1Regular>
              <div tw="flex flex-col m-4 gap-5 ml-0  desktop:self-start mt-8">
                <Feature icon={CoinIcon} text="High APY Staking" />
                <Feature
                  icon={CoinIcon}
                  text="Efficient framework of liquidation systems"
                />
                <Feature icon={CoinIcon} text="Leveraged investments" />
                <Feature
                  icon={CoinIcon}
                  text="Insurance reserve to secure liquidity"
                />
              </div>
            </div>
            <div tw="w-full tablet:w-1/2 min-width[50%] bg-font-200 h-3/5 opacity-30 block desktop:hidden"></div>
          </div>
          <div tw="flex flex-col gap-10 desktop:gap-20 my-20 justify-start desktop:items-start">
            <Txt.Section>Available strategies</Txt.Section>
            <div tw="flex flex-col tablet:flex-row gap-5 tablet:gap-7 flex-wrap">
              <Strategy
                title="Margin trading"
                description="Go long or short on any token pair"
                apyMin="0"
                apyMax="∞x"
                risk="High"
              />
              <Strategy
                title="Leveraged staking"
                description="Stake your favorite token and earn wealth"
                apyMin="0"
                apyMax="10x"
                risk="Low"
              />
              <Strategy
                title="Degenbox"
                description="MIM and TIME Aave looping"
                apyMin="0"
                apyMax="∞x"
                risk="High"
              />
              <Strategy
                title="Options"
                description="Play with Put and Call options"
                apyMin="0"
                apyMax="100x"
                risk="Medium"
              />
            </div>
          </div>
        </Layout>

        <Layout bgLight={true}>
          <div tw="w-full flex flex-col desktop:flex-row gap-10 desktop:gap-20 my-20 justify-start tablet:items-center desktop:items-start bg-primary-100">
            <div tw="w-full flex justify-start desktop:w-1/3">
              <Txt.Section tw="text-secondary desktop:w-24">
                Supported tokens
              </Txt.Section>
            </div>
            <div tw=" w-full desktop:w-2/3 flex flex-col tablet:flex-row">
              <div tw="flex flex-wrap justify-start gap-3 tablet:gap-6 desktop:gap-10">
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
                <div tw="rounded-xl bg-secondary-300 flex flex-row justify-center items-center gap-3 w-[170px] desktop:min-width[240px]">
                  <Plus tw="text-primary-100" size={20} />
                  <Txt.Body1Regular tw="text-primary-100">
                    See all tokens
                  </Txt.Body1Regular>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        <Layout>
          <div tw="w-full flex flex-col desktop:flex-row gap-10 desktop:gap-20 my-20 justify-start tablet:items-center desktop:items-start desktop:my-32">
            <div tw="w-full flex flex-col justify-center desktop:justify-start desktop:w-1/3 gap-4 desktop:gap-10 tablet:mb-12">
              <Txt.Section tw="desktop:mb-10">Earn by lending</Txt.Section>
              <Txt.Body1Regular tw="text-font-200">
                Traders can use LPs’ liquidity to perform leveraged investments
                and earn a lot, LPs’ get fees from this, liquidators assure
                liquidity is not attacked.
              </Txt.Body1Regular>
              <Button tw="w-1/2 tablet:w-auto self-start" text="Stake" bold />
            </div>
            <div tw=" w-full desktop:w-2/3 flex flex-col tablet:flex-row items-end justify-center">
              <div tw="flex flex-col w-full tablet:w-9/12 gap-5">
                <div tw="flex flex-row justify-between w-full">
                  <Txt.Body1Regular tw="text-font-200">Asset</Txt.Body1Regular>
                  <Txt.Body1Regular tw="text-font-200">APY</Txt.Body1Regular>
                </div>
                <div tw="flex w-full h-0.5 bg-secondary-300"></div>
                <Asset icon={EthereumIcon} tokenSymbol="ETH" apy="12" />
                <div tw="flex w-full h-0.5 bg-secondary-300"></div>
                <Asset icon={EthereumIcon} tokenSymbol="ETH" apy="12" />
                <div tw="flex w-full h-0.5 bg-secondary-300"></div>
                <Asset icon={EthereumIcon} tokenSymbol="ETH" apy="12" />
                <div tw="flex w-full h-0.5 bg-secondary-300"></div>
                <Asset icon={EthereumIcon} tokenSymbol="ETH" apy="12" />
              </div>
            </div>
          </div>

          {/* <div tw="w-full flex flex-col desktop:flex-row gap-10 desktop:gap-20 my-32 justify-start tablet:items-center desktop:items-start">
            <div tw="w-full flex justify-start desktop:w-1/3">
              <Txt.Section tw="desktop:w-24">Partners</Txt.Section>
            </div>
            <div tw=" w-full desktop:w-2/3 flex flex-col tablet:flex-row mt-4">
              <div tw="flex flex-wrap justify-start gap-3 tablet:gap-6">
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
                <Partner image={PartnerPlaceholer} />
              </div>
            </div>
          </div> */}
        </Layout>
        <Layout bgLight>
          <div tw="w-full flex flex-col gap-10 my-20 justify-start tablet:items-center desktop:items-start desktop:my-32">
            <div tw="w-full flex justify-start desktop:w-1/3">
              <Txt.Section tw="text-secondary">Join our community</Txt.Section>
            </div>
            <div tw=" w-full desktop:w-2/3 flex flex-col tablet:flex-row mt-4">
              <div tw="flex flex-wrap justify-start gap-10 tablet:gap-20 desktop:gap-40">
                <SocialLink
                  label="Twitter"
                  icon={TwitterIcon}
                  url="https://www.google.com"
                />
                <SocialLink
                  label="Discord"
                  icon={DiscordIcon}
                  url="https://www.google.com"
                />
                <SocialLink
                  label="Medium"
                  icon={MediumIcon}
                  url="https://www.google.com"
                />
                <SocialLink
                  label="GitHub"
                  icon={GithubIcon}
                  url="https://www.google.com"
                />
              </div>
            </div>
          </div>
        </Layout>
        <Layout>
          <div tw="w-full flex flex-row gap-10 desktop:gap-20 my-20 justify-start items-start desktop:my-32">
            <div tw="w-full flex flex-col justify-center desktop:justify-start w-4/12 tablet:w-6/12 gap-10 desktop:gap-20">
              <img tw="w-24 tablet:w-28 mr-6" src={LogoDark} alt="logo" />
              <Txt.Body1Bold tw="text-font-200 tablet:text-body2-regular">
                Ithil © 2022
              </Txt.Body1Bold>
            </div>
            <div tw=" w-full w-8/12 tablet:w-6/12 flex flex-col tablet:flex-row items-end justify-center">
              <div tw="flex flex-col w-full tablet:w-7/12 gap-3">
                <Txt.Body1Bold tw="text-font-200 tablet:text-body2-regular">
                  Legal disclaimer
                </Txt.Body1Bold>
                <Txt.Body1Bold tw="text-font-200 tablet:text-body2-regular">
                  IPFS
                </Txt.Body1Bold>
                <div tw="flex flex-row flex-wrap gap-2">
                  <div tw="h-9 w-9 rounded-xl bg-font-200 opacity-30"></div>
                  <div tw="h-9 w-9 rounded-xl bg-font-200 opacity-30"></div>
                  <div tw="h-9 w-9 rounded-xl bg-font-200 opacity-30"></div>
                  <div tw="h-9 w-9 rounded-xl bg-font-200 opacity-30"></div>
                </div>
                <Button tw="tablet:self-start mt-10" text="Launch app" bold />
              </div>
            </div>
          </div>
        </Layout>
      </>
    </ParallaxProvider>
  )
}

export default IndexPage
