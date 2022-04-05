/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import "twin.macro"
import tw from "twin.macro"

import { Txt } from "./Txt"

export const Asset = (props: { icon: any; tokenSymbol: string; apy: string }) => {
  const { icon, tokenSymbol, apy } = props
  const Icon = icon
  return (
    <div tw="flex flex-row justify-between items-center w-full">
      <div tw="flex flex-row gap-3 justify-start items-center">
        <img src={Icon} tw="w-12 h-12" alt="" />
        <Txt.Body1Regular tw="text-font-200">{tokenSymbol}</Txt.Body1Regular>
      </div>
      <Txt.Body1Regular tw="text-font-200">{apy}%</Txt.Body1Regular>
    </div>
  )
}
