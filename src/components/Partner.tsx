/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'

import { Txt } from "./Txt"

const Partner = (props: { image: any }) => {
  const { image } = props
  const Image = image
  return (
    <div tw="rounded-xl bg-[rgba(255, 255, 255, 0.1)] flex flex-col justify-between py-3 tablet:px-4 tablet:py-7 width[110px] tablet:width[180px] desktop:width[240px] height[50px] tablet:height[90px] desktop:height[110px] justify-center items-center">
      <img tw='w-8/12 h-auto' src={Image} alt="token icon" />
    </div>
  )
}

export default Partner