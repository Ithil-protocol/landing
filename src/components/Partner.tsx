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
    <div tw="rounded-xl bg-secondary-300 flex flex-col justify-between py-3 tablet:px-4 tablet:py-7 min-width[110px] tablet:min-width[180px] desktop:min-width[240px] justify-center items-center">
      <img tw='w-8/12 h-auto' src={Image} alt="token icon" />
    </div>
  )
}

export default Partner