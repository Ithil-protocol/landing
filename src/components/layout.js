import React from "react"
import PropTypes from "prop-types"
import 'twin.macro'
import tw from 'twin.macro'

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <div tw="flex flex-row bg-background-primary min-h-screen w-full">
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
