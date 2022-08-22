/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import "twin.macro"
import tw from "twin.macro"
import { TrackedLink } from "./TrackedLink"

export const FooterSocialIcon = (props: {
  icon: any
  altText: string
  url: string
}) => {
  const { icon, altText, url } = props
  const Icon = icon
  return (
    <TrackedLink title={altText} url={url} target="_blank">
      <div tw="h-9 w-9 flex justify-center items-center">
        <img src={Icon} alt={altText} />
      </div>
    </TrackedLink>
  )
}
