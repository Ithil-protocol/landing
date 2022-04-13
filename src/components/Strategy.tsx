/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import { Txt } from "./Txt"
import tw from "twin.macro"

const Strategy = (props: {
  title: string
  description: string
  apyMin: string
  apyMax: string
  risk: string
}) => {
  const { title, description, apyMin, apyMax, risk } = props
  return (
    <div tw="rounded-xl bg-secondary-300 flex flex-col justify-between p-5 w-full tablet:w-[300px] desktop:w-[356px]">
      <Txt.Heading2 tw="text-primary mb-2">{title}</Txt.Heading2>
      <Txt.Body2Regular tw="text-font-200 mb-12 w-9/12">
        {description}
      </Txt.Body2Regular>
      <div tw="flex flex-row justify-between">
        <Txt.Body2Bold tw="text-primary">
          APY: {apyMin} - {apyMax}
        </Txt.Body2Bold>
        <div tw="flex flex-row gap-3 items-center">
          <Txt.CaptionMedium tw="text-primary">Risk:</Txt.CaptionMedium>
          <div
            css={[
              tw`rounded-md py-1 px-3`,
              risk === "High" && tw`bg-error`,
              risk === "Medium" && tw`bg-warning`,
              risk === "Low" && tw`bg-success`,
            ]}
          >
            <Txt.CaptionMedium tw="text-primary">{risk}</Txt.CaptionMedium>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategy
