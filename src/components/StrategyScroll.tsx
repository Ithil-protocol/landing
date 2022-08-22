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
import Strategy from "./Strategy"
import { Txt } from "./Txt"
import tw from "twin.macro"

const strategies = [
  {
    id: 1,
    title: "Margin trading",
    description: "Go long or short on any token pair via Kyber Network",
    apyMin: "0",
    apyMax: "∞x",
    risk: "High",
    url: "",
  },
  {
    id: 2,
    title: "Yearn on steroids",
    description:
      "Stake your favorite tokens on any Yearn vault and multiply your APY",
    apyMin: "5x",
    apyMax: "20x",
    risk: "Low",
    url: "",
  },
  {
    id: 3,
    title: "Battle in the Curve wars",
    description: "Superfeed your harvests on Curve and Convex with leverage",
    apyMin: "10x",
    apyMax: "100x",
    risk: "Medium",
    url: "",
  },
  {
    id: 4,
    title: "Grow with Euler",
    description: "Grow your portfolio lending your tokens",
    apyMin: "1x",
    apyMax: "10x",
    risk: "Low",
    url: "",
  },
]
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

export const StrategyScroll = () => {
  const [items] = React.useState(strategies)
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
          <Txt.Section tw="flex-grow">Available strategies</Txt.Section>
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
              title={id}
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
      <Strategy title={title} {...rest} />
    </div>
  )
}
