/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'

import { Txt } from "./Txt"

export const SocialLink = (props: { icon: any, label: string, url: string }) => {
  const { icon, label, url } = props
  const Icon = icon
  return (
    <a href={url} target="_blank">
            <div tw="flex items-center gap-5 justify-center">
              <img tw="h-8 w-8" src={Icon} alt="twitter icon" />
              <Txt.InputText>{label}</Txt.InputText>
            </div>
            </a>
  )
}
