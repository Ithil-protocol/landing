import "twin.macro"

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import { Button } from "./Button"
import { List } from "phosphor-react"
// @ts-ignore
import LogoDark from "../assets/images/logoFullDark.svg"
import { Txt } from "./Txt"
import tw from "twin.macro"
import { useState } from "react"

const Header = (props: { siteTitle?: any }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between py-2 tablet:py-4 mb-6 max-w-1920 w-full">
      <img tw="w-24 tablet:w-28 mr-6" src={LogoDark} />
      <div className="lg:hidden flex flex-row gap-3">
        <a href="https://app.ithil.fi" target="_blank" className={`${isExpanded ? 'hidden' : 'flex'}`}>
          <Button tw="block lg:hidden h-10" bold text="Launch app" />
        </a>
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-primary"
        >
          <List size={26} />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full lg:flex lg:items-center lg:w-auto  h-screen desktop:h-auto`}
      >
        <div tw="flex flex-col desktop:flex-row justify-center gap-5 mr-14 mt-12 desktop:mt-0">
          <a href="https://github.com/Ithil-protocol" target="_blank">
            <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular">
              GitHub
            </Txt.Body1Bold>
          </a>
          <a href="https://discord.gg/tEaGBcGdQC" target="_blank">
            <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular">
              Discord
            </Txt.Body1Bold>
          </a>
          <a href="https://twitter.com/ithil_protocol" target="_blank">
            <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular">
              Twitter
            </Txt.Body1Bold>
          </a>
          <a href="https://docs.ithil.fi/" target="_blank">
            <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular">
              Docs
            </Txt.Body1Bold>
          </a>

          <Txt.Body1Bold tw="text-font-200 tablet:text-body2-regular mt-16 desktop:hidden">
            Legal disclaimer
          </Txt.Body1Bold>
          <a href="https://ipfs.io" target="_blank" tw="max-w-min desktop:hidden">
            <Txt.Body1Bold tw="text-font-200 tablet:text-body2-regular max-w-min">
              IPFS
            </Txt.Body1Bold>
          </a>
          <Txt.Body1Bold tw="text-font-200 tablet:text-body2-regular desktop:hidden">
            Ithil © 2022
          </Txt.Body1Bold>
          <a tw="mt-6" href="https://app.ithil.fi" target="_blank" className={`${isExpanded ? 'flex' : 'hidden'}`}>
          <Button tw="block lg:hidden h-10" bold text="Launch app" />
        </a>
        </div>
        <a tw="" href="https://app.ithil.fi" target="_blank">
          <Button tw="hidden lg:block" bold text="Launch app" />
        </a>
      </div>
    </nav>
  )
}

export default Header
