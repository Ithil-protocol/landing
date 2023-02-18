/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import tw from "twin.macro"

import { TrackedLink } from "./TrackedLink"
import { Txt } from "./Txt"

const Service = (props: {
  title: string
  description: string
  status: string
  risk: string
  url: string
}) => {
  const { title, description, status, risk, url } = props
  return (
    <TrackedLink url={url} title="Use the service now" target="_blank">
      <div tw="rounded-xl bg-[rgba(255, 255, 255, 0.1)] flex flex-col justify-between p-5 w-full tablet:w-[300px] desktop:w-[356px] hover:bg-[rgba(150, 150, 150, 0.1)]">
        <Txt.Heading2 tw="text-primary mb-2">{title}</Txt.Heading2>
        <Txt.Body2Regular tw="text-font-200 mb-2 tablet:mb-12 w-9/12 h-14">
          {description}
        </Txt.Body2Regular>
        <div tw="flex flex-row justify-between">
          <Txt.Body2Bold tw="text-primary">{status}</Txt.Body2Bold>
          <div tw="flex flex-row gap-3 items-center">
            <Txt.CaptionMedium tw="text-primary">Risk:</Txt.CaptionMedium>
            <div
              css={[
                tw`rounded-md py-1 px-3`,
                risk === "Low" && tw`bg-success`,
                risk === "Medium" && tw`bg-warning`,
                risk === "High" && tw`bg-error`,
              ]}
            >
              <Txt.CaptionMedium tw="text-primary">{risk}</Txt.CaptionMedium>
            </div>
          </div>
        </div>
      </div>
    </TrackedLink>
  )
}

export default Service
