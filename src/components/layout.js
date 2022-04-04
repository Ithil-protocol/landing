import React from "react"
import PropTypes from "prop-types"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import 'twin.macro'
import tw from 'twin.macro'

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <div tw="flex flex-row bg-background-primary min-h-screen w-full">
        <div
          tw="max-w-1920 w-full tablet:w-[calc(100% - 3rem)] my-6 mx-4 tablet:mx-24"
        >
          <Header />
          {children}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
