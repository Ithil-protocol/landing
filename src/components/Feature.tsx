/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'

import { Txt } from "./Txt"

const Feature = (props: {icon: any, text: string}) => {
  return (
    <div tw="flex flex-row justify-start gap-5 items-center">
      <div tw="flex justify-center items-center">
        <div tw='width[64px] height[64px] border-radius[50%] bg-primary flex justify-center items-center'>
        <img src={props.icon} alt="" />
        </div>
      </div>
      <Txt.Heading2 tw="text-primary">{props.text}</Txt.Heading2>
    </div>
  )
}

export default Feature