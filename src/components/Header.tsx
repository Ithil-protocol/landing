import "twin.macro"

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import { Button } from "./Button"
import { List } from "phosphor-react"
// @ts-ignore
import LogoDark from "../assets/images/logoFullDark.svg"
import { Txt } from "./Txt"
import { useState } from "react"
import useScrollingUp from "../hooks/useScrollingUp"

export const Header = (props: { siteTitle?: any }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  const scrolled = useScrollingUp()

  return (
    <div
      className={`${
        !isExpanded && (scrolled ? "top-0" : "top-[-80px]")
      } flex flex-row justify-center items-center py-4 w-full tablet:m-[calc(100% - 3rem)] px-4 tablet:px-24 z-50 fixed bg-background-primary transition-all`}
    >
      <nav className={`flex w-full flex-wrap items-center justify-between`}>
        <img tw="desktop:w-1/6 tablet:w-28 mr-6" src={LogoDark} alt="logo" />
        <div className="lg:hidden flex flex-row gap-3">
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
          <div tw="flex flex-col desktop:flex-row justify-center gap-10 mr-7 ml-7 text-center mt-12 desktop:mt-0">
            <a href="https://github.com/Ithil-protocol" target="_blank">
              <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular hover:text-primary">
                GitHub
              </Txt.Body1Bold>
            </a>
            <a href="https://discord.gg/tEaGBcGdQC" target="_blank">
              <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular hover:text-primary">
                Discord
              </Txt.Body1Bold>
            </a>
            <a href="https://twitter.com/ithil_protocol" target="_blank">
              <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular hover:text-primary">
                Twitter
              </Txt.Body1Bold>
            </a>
            <a href="https://docs.ithil.fi/" target="_blank">
              <Txt.Body1Bold tw="tablet:text-font-200 text-primary-100 tablet:font-normal tablet:text-body2-regular hover:text-primary">
                Docs
              </Txt.Body1Bold>
            </a>
          </div>
          <a tw="" href="https://ithil-frontend.netlify.app/" target="_blank">
            <Button tw="hidden lg:block" bold text="Launch app" />
          </a>
        </div>
      </nav>
    </div>
  )
}
