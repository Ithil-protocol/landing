import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'twin.macro'
import tw from 'twin.macro'

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <div tw="flex flex-col bg-background-primary min-h-screen desktop:flex-row w-full">
        <div
          tw="max-w-1920 w-[calc(100% - 3rem)] my-6 mx-auto"
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
