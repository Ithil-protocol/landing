import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

import ArrowRight from "../assets/images/arrow_right.svg"
import Layout from "./Layout"
import React from "react"
import Strategy from "./Strategy"
import { Txt } from "./Txt"

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
        <div tw="flex flex-row justify-between">
          <Txt.Section tw="my-20">Available strategies</Txt.Section>
          <div tw="flex flex-row gap-2">
            <ArrowRight />
            <ArrowRight />
          </div>
        </div>
        <ScrollMenu LeftArrow={null} RightArrow={null} apiRef={apiRef}>
          {items.map(({ id, ...rest }) => (
            <Card
              itemId={id}
              title={id}
              key={id}
              onClick={handleClick(id)}
              {...rest}
            />
          ))}
        </ScrollMenu>
      </Layout>
    </>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return <div onClick={() => scrollPrev()}>Left</div>
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return <div onClick={() => scrollNext()}>Right</div>
}

function Card({ onClick, title, itemId, ...rest }) {
  const visibility = React.useContext(VisibilityContext)

  return (
    <div onClick={() => onClick(visibility)} tabIndex={0}>
      {/* @ts-ignore */}
      <Strategy {...rest} />
    </div>
  )
}
