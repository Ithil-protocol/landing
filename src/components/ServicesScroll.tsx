import "twin.macro"

import React, { useState } from "react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

// @ts-ignore
import ArrowLeft from "../assets/images/arrowLeft.svg"
// @ts-ignore
import ArrowLeftSelected from "../assets/images/arrowLeftSelected.svg"
// @ts-ignore
import ArrowRight from "../assets/images/arrowRight.svg"
// @ts-ignore
import ArrowRightSelected from "../assets/images/arrowRightSelected.svg"
import Layout from "./Layout"
import Service from "./Service"
import { Txt } from "./Txt"
import tw from "twin.macro"

const services = [
  {
    id: 1,
    title: "Aave",
    description:
      "Optimise your capital allocation on the biggest DeFi money market",
    status: "Active",
    risk: "Low",
    url: "https://app.ithil.fi/services/aave",
  },
  {
    id: 2,
    title: "GMX",
    description:
      "Earn part of the protocol trading fees and get exposure to ETH",
    status: "Active",
    risk: "Medium",
    url: "https://app.ithil.fi/services/gmx",
  },
  {
    id: 3,
    title: "Balancer + Aura",
    description:
      "Provide liquidity to any pool with single or multi-token leverage",
    status: "Coming Soon",
    risk: "Low",
    url: "",
  },
  {
    id: 4,
    title: "Curve + Convex",
    description:
      "Leveraged LPing on any Curve pool and farming rewards on Convex",
    status: "Coming Soon",
    risk: "Medium",
    url: "",
  },
  {
    id: 5,
    title: "NFT Mortgages",
    description: "Buy a metaverse LAND or a BAYC over monthly instalments",
    status: "Coming Soon",
    risk: "High",
    url: "",
  },
]
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

export const ServicesScroll = () => {
  const [items] = React.useState(services)
  const [selected, setSelected] = React.useState([])

  const apiRef = React.useRef({} as scrollVisibilityApiType)

  const goToFirst = () => {
    const items = apiRef.current.items.toItems()
    apiRef.current.scrollToItem(apiRef.current.getPrevItem())
  }
  const goToLast = () => {
    const items = apiRef.current.items.toItems()
    apiRef.current.scrollToItem(apiRef.current.getNextItem())
  }

  const isItemSelected = id => !!selected.find(el => el === id)

  const handleClick =
    id =>
    ({ getItemById, scrollToItem, ...rest }) => {
      // debugger
      const itemSelected = isItemSelected(id)

      setSelected(currentSelected =>
        itemSelected
          ? currentSelected.filter(el => el !== id)
          : currentSelected.concat(id)
      )
    }

  return (
    <>
      <Layout margins>
        <div tw="flex flex-row justify-between items-center my-10">
          <Txt.Section tw="flex-grow">Available Services</Txt.Section>
          <div tw="flex flex-row gap-4 cursor-pointer">
            <img
              tw="h-8 w-8"
              src={ArrowLeftSelected}
              alt="arrow left"
              onClick={() => {
                goToFirst()
              }}
            />
            <img
              tw="h-8 w-8"
              src={ArrowRightSelected}
              alt="arrow right"
              onClick={() => {
                goToLast()
              }}
            />
          </div>
        </div>
      </Layout>
      <Layout>
        <ScrollMenu
          LeftArrow={null}
          RightArrow={null}
          apiRef={apiRef}
          wrapperClassName="mb-10 desktop-wide:ml-20"
        >
          {items.map(({ id, ...rest }, index) => (
            // @ts-ignore
            <Card
              onClick={handleClick(id)}
              itemId={id}
              key={id}
              css={[tw` w-screen tablet:w-auto`]}
              {...rest}
            />
          ))}
        </ScrollMenu>
      </Layout>
    </>
  )
}

function Card({ onClick, title, itemId, className, ...rest }) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div
      onClick={() => onClick(visibility)}
      tabIndex={0}
      className={`${className} px-3`}
    >
      {/* @ts-ignore */}
      <Service title={title} {...rest} />
    </div>
  )
}
