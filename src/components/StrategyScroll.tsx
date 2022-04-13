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
    description: "Go long or short on any token pair",
    apyMin: "0",
    apyMax: "∞x",
    risk: "High",
  },
  {
    id: 2,
    title: "Leveraged staking",
    description: "Stake your favorite token and earn wealth",
    apyMin: "0",
    apyMax: "10x",
    risk: "Low",
  },
  {
    id: 3,
    title: "Degenbox",
    description: "MIM and TIME Aave looping",
    apyMin: "0",
    apyMax: "∞x",
    risk: "High",
  },
  {
    id: 4,
    title: "Options",
    description: "Play with Put and Call options",
    apyMin: "0",
    apyMax: "100x",
    risk: "Medium",
  },
]
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

export const StrategyScroll = () => {
  const [items] = React.useState(strategies)
  const [selected, setSelected] = React.useState([])

  const apiRef = React.useRef({} as scrollVisibilityApiType)
  const [isAtStart, setIsAtStart] = useState(true)

  const goToFirst = () => {
    const items = apiRef.current.items.toItems()
    apiRef.current.scrollToItem(
      apiRef.current.getItemById(items[0]),
      "auto",
      "start"
    )
  }
  const goToLast = () => {
    const items = apiRef.current.items.toItems()
    apiRef.current.scrollToItem(
      apiRef.current.getItemById(items[items.length - 1]),
      "auto",
      "start"
    )
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
      <Layout>
        <div tw="flex flex-row justify-between items-center my-20">
          <Txt.Section tw="flex-grow">Available strategies</Txt.Section>
          {window.screen.width < 1600 && (
            <div tw="flex flex-row gap-4">
              <img
                tw="h-8 w-8"
                src={!isAtStart ? ArrowLeftSelected : ArrowLeft}
                alt="arrow left"
                onClick={() => {
                  goToFirst()
                  setIsAtStart(true)
                }}
              />
              <img
                tw="h-8 w-8"
                src={!isAtStart ? ArrowRight : ArrowRightSelected}
                alt="arrow right"
                onClick={() => {
                  goToLast()
                  setIsAtStart(false)
                }}
              />
            </div>
          )}
        </div>
      </Layout>
      <ScrollMenu LeftArrow={null} RightArrow={null} apiRef={apiRef}>
        {items.map(({ id, ...rest }, index) => (
          // @ts-ignore
          <Card
            itemId={id}
            title={id}
            key={id}
            css={[
              tw`mr-6`,
              index === 0 && tw`ml-12`,
              index === items.length - 1 && tw`mr-12`,
            ]}
            onClick={handleClick(id)}
            {...rest}
          />
        ))}
      </ScrollMenu>
    </>
  )
}

function Card({ onClick, title, itemId, className, ...rest }) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div onClick={() => onClick(visibility)} tabIndex={0} className={className}>
      {/* @ts-ignore */}
      <Strategy {...rest} />
    </div>
  )
}
