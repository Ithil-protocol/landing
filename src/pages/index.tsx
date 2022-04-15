import "twin.macro"

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

//@ts-ignore
import ArrowRight from "../assets/images/arrowRight.svg"
import { Asset } from "../components/Asset"
import { BookOpen } from "phosphor-react"
import { Button } from "../components/Button"
import { TrackedLink } from "../components/TrackedLink"
// @ts-ignore
import IthilBackground from "../assets/images/bgSvg.svg"
// @ts-ignore
import HowItWorkIllustration from "../assets/images/howItWorks.svg"
//@ts-ignore
import PartnerComposable from "../assets/images/composable.svg"
//@ts-ignore
import PartnerAdvancedBlockchain from "../assets/images/advancedBlockchain.svg"
//@ts-ignore
import PartnerDlab from "../assets/images/dlab.svg"
import PropTypes from "prop-types"
import SEO from "../components/seo"

import Token from "../components/Token"
import tw from "twin.macro"
import { withPrefix } from "gatsby"
import { FooterSocialIcon } from "../components/FooterSocialIcon"

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
import Layout from "../components/Layout"
import { Link } from "gatsby"
//@ts-ignore
import LogoDark from "../assets/images/logoFullDark.svg"
//@ts-ignore
import MediumIcon from "../assets/images/medium.svg"
import Partner from "../components/Partner"
import { Plus } from "phosphor-react"
import React from "react"
import { SocialLink } from "../components/SocialLink"
import Strategy from "../components/Strategy"
import { StrategyScroll } from "../components/StrategyScroll"
//@ts-ignore
import TetherUsdIcon from "../assets/images/usdt.png"
//@ts-ignore
import TwitterIcon from "../assets/images/twitter.svg"
import { Txt } from "../components/Txt"
//@ts-ignore
import WrappedBitconIcon from "../assets/images/wbtc.png"
//@ts-ignore
import DiscordIconLight from "../assets/images/discordLight.svg"
//@ts-ignore
import TwitterIconLight from "../assets/images/twitterLight.svg"
//@ts-ignore
import MediumIconLight from "../assets/images/mediumLight.svg"
//@ts-ignore
import GithubIconLight from "../assets/images/githubLight.svg"
// @ts-ignore
import WrappedEtherIcon from "../assets/images/weth.png"

//@ts-ignore
import ShibInuIcon from "../assets/images/shibIcon.svg"
//@ts-ignore
import UsdcIcon from "../assets/images/usdcIcon.svg"
//@ts-ignore
import UniswapIcon from "../assets/images/uniswapIcon.svg"
//@ts-ignore
import OusdIcon from "../assets/images/ousdIcon.svg"

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <>
        <Layout header margins>
          <SEO title="Home" />
          <div tw="w-full mt-20 z-10">
            <div tw="flex flex-col gap-10 w-full tablet:w-9/12 desktop:w-7/12">
              <Txt.Section tw="">Leverage to Earn</Txt.Section>
              <Txt.Body1Regular tw="text-primary-100">
                To experienced traders and DeFi newcomers entering the market or
                looking for customizable investment strategies, our DeFi
                protocol offers simplified and reliable leveraged staking and
                trading strategies for any token, because we believe in
                simplicity and guidance in the complex Defi universe.
              </Txt.Body1Regular>
              <div tw="flex flex-row gap-3 ml-0 self-start mt-10 w-full justify-start">
                <TrackedLink title="App" tw="width[50%] tablet:w-auto" url="https://app.ithil.fi" target="_blank">
                  <Button
                    tw="w-full tablet:w-auto self-start"
                    text="Start investing"
                    bold
                  />
                </TrackedLink>
                <TrackedLink
                  title="Docs"
                  tw="width[50%] tablet:w-auto"
                  url="https://docs.ithil.fi/"
                  target="_blank"
                >
                  <Button
                    tw="w-full tablet:w-auto self-start"
                    text="Docs"
                    bold
                    action
                    leftIcon={BookOpen}
                  />
                </TrackedLink>
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
                      "linear-gradient(to bottom, rgba(21, 26, 41, 1) 0%, rgba(21, 26, 41, 0) 15%, rgba(21, 26, 41, 0) 75%, rgba(22, 28, 49, 1) 94%)",
                  }}
                />
              ),
            },
          ]}
        />
        <Layout bgMain>
          <Layout margins>
            <div tw="desktop:h-screen w-full flex flex-col desktop:flex-row justify-between items-center gap-12 desktop:gap-20 desktop:my-0">
              <div tw="w-full min-width[50%] h-3/5 hidden desktop:flex justify-center items-center">
                <img
                  tw="w-full"
                  src={HowItWorkIllustration}
                  alt="how it works"
                />
              </div>
              <div tw="flex flex-col w-full gap-4 desktop:gap-10 justify-start">
                <Txt.Section>How it works</Txt.Section>
                <Txt.Body1Regular tw="text-font-200 text-left">
                  Traders can use LPs' liquidity to perform leveraged
                  investments and earn a lot, LPs' get fees from this,
                  liquidators assure liquidity is not attacked.
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
              <div tw="w-full flex justify-center items-center desktop:hidden">
                <img
                  tw="w-full"
                  src={HowItWorkIllustration}
                  alt="how it works"
                />
              </div>
            </div>
          </Layout>
          <StrategyScroll />
        </Layout>
        <Layout margins bgLight>
          <div tw="w-full flex flex-col desktop-wide:flex-row gap-10 desktop:gap-20 my-20 justify-start tablet:items-center desktop:items-start">
            <div tw="w-full flex justify-start desktop:w-2/12">
              <Txt.Section tw="text-secondary">Supported tokens</Txt.Section>
            </div>
            <div tw="w-full desktop-wide:w-10/12 flex flex-col tablet:items-start desktop:items-end gap[1vw] tablet:gap[2vw] desktop:gap[2vw]">
              <div tw="w-full flex-wrap tablet:flex-nowrap tablet:w-auto flex flex-row tablet:flex-col tablet:flex-row gap[4vw] tablet:gap[2vw] desktop:gap[2vw] desktop:margin-right[5vw] justify-center tablet:justify-start">
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
                  tw="flex tablet:hidden"
                  tokenName="Wrapped Bitcoin"
                  tokenSymbol="WBTC"
                  apy="8%"
                  icon={WrappedBitconIcon}
                />
                <Token
                  tw="flex tablet:hidden"
                  tokenName="Tether USD"
                  tokenSymbol="USDT"
                  apy="10%"
                  icon={TetherUsdIcon}
                />
                <TrackedLink title="Stake" url="https://app.ithil.fi/stake" target="_blank" tw="width[45%] tablet:w-[170px] desktop:min-width[240px] height[160px] tablet:hidden">
                <div tw="flex rounded-xl bg-secondary-300 flex flex-row justify-center items-center gap-3 w-full height[160px]">
                  <Plus tw="text-primary-100" size={20} />
                  <Txt.Body1Regular tw="text-primary-100">
                    See all tokens
                  </Txt.Body1Regular>
                </div>
                </TrackedLink>
              </div>
              <div tw="flex flex-row gap[1vw] tablet:gap[2vw] desktop:gap[2vw] hidden tablet:flex tablet:margin-left[5vw] desktop:ml-0">
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
                <TrackedLink title="Supported tokens" tw="tablet:min-width[170px] desktop:min-width[240px]" url="https://app.ithil.fi/stake" target="_blank">
                <div tw="rounded-xl bg-secondary-300 flex flex-row justify-center items-center gap-3 tablet:min-width[170px] desktop:min-width[240px] h-full">
                  <Plus tw="text-primary-100" size={20} />
                  <Txt.Body1Regular tw="text-primary-100">
                    See all tokens
                  </Txt.Body1Regular>
                </div>
                </TrackedLink>
              </div>
            </div>
          </div>
        </Layout>

        <Layout margins bgDark>
          <div tw="w-full flex flex-col desktop:flex-row gap-10 desktop:gap-20 my-20 justify-start tablet:items-center desktop:items-start desktop:my-32">
            <div tw="w-full flex flex-col justify-center desktop:justify-start desktop:w-1/3 gap-4 desktop:gap-10 tablet:mb-12">
              <Txt.Section tw="tablet:mb-5 desktop:mb-10">
                Earn by lending
              </Txt.Section>
              <Txt.Body1Regular tw="text-font-200">
                Traders can use LPs' liquidity to perform leveraged investments
                and earn a lot, LPs' get fees from this, liquidators assure
                liquidity is not attacked.
              </Txt.Body1Regular>
              <TrackedLink title="Staking page" url="https://app.ithil.fi/stake" target="_blank">
                <Button tw="w-1/2 tablet:w-auto self-start" text="Stake" bold />
              </TrackedLink>
            </div>
            <div tw="w-full desktop:w-2/3 flex flex-col tablet:flex-row items-end justify-center">
              <div tw="flex flex-col w-full tablet:w-9/12 gap-5">
                <div tw="flex flex-row justify-between w-full">
                  <Txt.Body1Regular tw="text-font-200">Asset</Txt.Body1Regular>
                  <Txt.Body1Regular tw="text-font-200">APY</Txt.Body1Regular>
                </div>
                <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={UsdcIcon} tokenSymbol="ETH" apy="12" />
                <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={DaiStablecoinIcon} tokenSymbol="ETH" apy="5" />
                <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={WrappedEtherIcon} tokenSymbol="ETH" apy="11" />
                <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={WrappedBitconIcon} tokenSymbol="ETH" apy="8" />
                <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={ShibInuIcon} tokenSymbol="ETH" apy="11" />
                {/* <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={UniswapIcon} tokenSymbol="ETH" apy="18" />
                <div tw="flex w-full h-0.5 bg-primary opacity-10"></div>
                <Asset icon={OusdIcon} tokenSymbol="ETH" apy="14" /> */}
                {/* TODO */}
                <a tw="self-center mt-5" href="https://app.ithil.fi/stake" target="_blank">
                <div tw="flex flex-row justify-center items-center gap-2 ">
                    <Plus tw="text-primary-100" size={20} />
                    <Txt.Body1Regular tw="text-primary-100">
                      See all tokens
                    </Txt.Body1Regular>
                  </div>
              </a>
              </div>
              
            </div>
          </div>

          <div tw="w-full flex flex-col desktop:flex-row gap-10 desktop:gap-20 my-32 justify-start tablet:items-center desktop:items-start">
            <div tw="w-full flex justify-start desktop:w-1/3">
              <Txt.Section tw="desktop:w-24">Partners</Txt.Section>
            </div>
            <div tw=" w-full desktop:w-2/3 flex flex-col tablet:flex-row mt-4">
              <div tw="flex flex-row flex-wrap justify-start gap-3 tablet:gap-6">
                <Partner image={PartnerComposable} />
                <Partner image={PartnerAdvancedBlockchain} />
                <Partner image={PartnerDlab} />
              </div>
            </div>
          </div>
        </Layout>
        <Layout bgLight margins>
          <div tw="w-full flex flex-col gap-10 my-20 justify-start tablet:items-center desktop:items-start desktop:my-32">
            <div tw="w-full flex justify-start desktop:w-1/3">
              <Txt.Section tw="text-secondary">Join our community</Txt.Section>
            </div>
            <div tw="w-full flex flex-col tablet:flex-row mt-4">
              <div tw="flex flex-wrap justify-start gap-10 tablet:gap-16 desktop:gap-32">
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
        <Layout margins>
          <div tw="w-full flex flex-col tablet:flex-row gap-10 desktop:gap-20 my-5 justify-start items-start">
            <div tw="w-full flex flex-col justify-center desktop:justify-start w-4/12 tablet:w-6/12 gap-10 desktop:gap-20">
              <img tw="w-24 tablet:w-28 mr-6" src={LogoDark} alt="logo" />
              <Txt.Body1Regular tw="text-font-200 tablet:text-body2-regular">
              Ithil is a DeFi Swiss knife that allows anyone to use all available protocols and tools to earn thanks to their ability rather than their capital.
              </Txt.Body1Regular>
            </div>
            <div tw="w-full tablet:w-6/12 flex items-end justify-center">
              <div tw="flex flex-row tablet:flex-col w-full desktop:w-7/12 gap-3">
                <div tw="w-5/12 flex flex-col gap-2">
                  <Txt.Body1Regular tw="text-font-200 tablet:text-body2-regular">
                    Legal disclaimer
                  </Txt.Body1Regular>
                  <TrackedLink title="tos" url="https://ipfs.io" target="_blank" tw="max-w-min">
                  <Txt.Body1Regular tw="text-font-200 tablet:text-body2-regular max-w-min">
                    ToS
                  </Txt.Body1Regular>
                </TrackedLink>
                </div>
                <div tw="w-7/12 tablet:w-full">
                  <div tw="flex flex-row flex-wrap gap-3">
                    <FooterSocialIcon
                      icon={TwitterIconLight}
                      url="https://twitter.com/ithil_protocol"
                      altText="twitter"
                    />
                    <FooterSocialIcon
                      icon={DiscordIconLight}
                      url="https://discord.gg/tEaGBcGdQC"
                      altText="discord"
                    />
                    <FooterSocialIcon
                      icon={MediumIconLight}
                      url="https://medium.com/@ithil_protocol"
                      altText="medium"
                    />
                    <FooterSocialIcon
                      icon={GithubIconLight}
                      url="https://github.com/Ithil-protocol"
                      altText="github"
                    />
                  </div>
                  <Button tw="tablet:self-start mt-10" text="Launch app" bold />
                  </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    </ParallaxProvider>
  )
}

export default IndexPage
