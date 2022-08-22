/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import "twin.macro"
import tw from "twin.macro"

import { Txt } from "./Txt"

export const SocialLink = (props: {
  icon: any
  label: string
  url: string
}) => {
  const { icon, label, url } = props
  const Icon = icon
  return (
    <a href={url} target="_blank" title="social media link">
      <div tw="flex items-center gap-5 justify-center">
        <img
          tw="h-8 w-8 hover:text-secondary-200"
          src={Icon}
          alt="social media icon"
        />
        <Txt.InputText tw="hover:text-secondary-200">{label}</Txt.InputText>
      </div>
    </a>
  )
}
