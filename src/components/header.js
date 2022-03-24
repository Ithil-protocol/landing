/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'
import { useState } from "react"

import LogoDark from '../assets/images/logoFullDark.svg'
import { Button } from './Button'
import { Txt } from './Txt';
import { List } from 'phosphor-react'

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between py-2 tablet:py-4 tablet:p-6 mb-6 max-w-1920 w-full tablet:w-[calc(100% - 3rem)]">
      <img tw='w-24 tablet:w-28 mr-6' src={LogoDark} />
      <div className="lg:hidden flex flex-row gap-3">
      <Button tw='block lg:hidden' action bold text="Launch app" />
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white "
        >
          <List size={26} />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full lg:flex lg:items-center lg:w-auto p-8 desktop:p-0`}
      >
        <div tw='flex flex-col desktop:flex-row justify-center gap-5 mr-14'>
          <a href='https://www.google.com' target='_blank'>
            <Txt.Body2Regular tw='text-font-200'>GitHub</Txt.Body2Regular>
          </a>
          <a href='https://www.google.com' target='_blank'>
            <Txt.Body2Regular tw='text-font-200'>Discord</Txt.Body2Regular>
          </a>
          <a href='https://www.google.com' target='_blank'>
            <Txt.Body2Regular tw='text-font-200'>Twitter</Txt.Body2Regular>
          </a>
          <a href='https://www.google.com' target='_blank'>
            <Txt.Body2Regular tw='text-font-200'>Docs</Txt.Body2Regular>
          </a>
        </div>
        <Button tw='hidden lg:block' action bold text="Launch app" />
      </div>
      
    </nav>
  )
}

export default Header
