/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'

import { Txt } from "./Txt"

const Token = (props: { icon: any, tokenSymbol: string, tokenName: string, apy: string, className?: string }) => {
  const { icon, tokenName, tokenSymbol, apy } = props
  const Icon = icon
  return (
    <div className={props.className} tw="rounded-xl bg-secondary-300 flex flex-col justify-between p-6 gap-3 width[45%] tablet:min-width[170px] desktop:min-width[240px]">
      <img tw='w-12 h-12' src={Icon} alt="token icon" />
      <div tw="flex flex-row justify-between">
        <Txt.Body2Bold tw="text-primary">{tokenSymbol}</Txt.Body2Bold>
        <div tw="flex flex-row gap-3 items-center">
          <Txt.CaptionMedium tw="text-primary" >APY:</Txt.CaptionMedium>
          <Txt.CaptionMedium tw="text-primary" >{apy}</Txt.CaptionMedium>
        </div>
      {/* <Txt.Heading2 tw="text-primary mb-2">Margin Trading</Txt.Heading2> */}
      </div>
        <Txt.Body2Regular tw="text-font-200" >{tokenName}</Txt.Body2Regular>
    </div>
  )
}

export default Token
