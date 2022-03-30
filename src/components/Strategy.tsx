/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'

import { Txt } from "./Txt"


const Strategy = () => {
  return (
    <div tw="rounded-xl bg-secondary-300 flex flex-col justify-between p-5 min-width[356px]">
      <Txt.Heading2 tw="text-primary mb-2">Margin Trading</Txt.Heading2>
      <Txt.Body2Regular tw="text-font-200 mb-12" >Go long or short on any token pair</Txt.Body2Regular>
      <div tw="flex flex-row justify-between">
        <Txt.Body2Bold tw="text-primary">APY: 0 - inf x</Txt.Body2Bold>
        <div tw="flex flex-row gap-3 items-center">
          <Txt.CaptionMedium tw="text-primary" >Risk:</Txt.CaptionMedium>
          <div tw="rounded-md py-1 px-3 bg-error">
          <Txt.CaptionMedium tw="text-primary" >High:</Txt.CaptionMedium>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategy