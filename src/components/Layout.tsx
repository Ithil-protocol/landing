import "twin.macro"

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import Header from "./Header"
import PropTypes from "prop-types"
import React from "react"
import tw from "twin.macro"

const Layout = (props: {
  children: any
  bgLight?: boolean
  header?: boolean
  minScreenHeight?: boolean
  bgDark?: boolean
  bgMain?: boolean
  margins?: boolean
}) => {
  return (
    <>
      <div
        className={
          (props.bgDark && "layoutDark") ||
          (props.bgLight && "layoutLight") ||
          (props.bgMain && "layoutMain")
        }
        // @ts-ignore
        css={[
          tw`flex flex-row w-full justify-center items-center`,
          props.minScreenHeight && tw`min-h-screen`,
        ]}
      >
        <div
          // tw="max-w-1920 w-full tablet:w-[calc(100% - 3rem)] my-6 mx-4 tablet:mx-24"
          className={`max-w-1920 w-full ${
            props.margins &&
            "tablet:m-[calc(100% - 3rem)] py-6 px-4 tablet:px-24"
          }`}
        >
          {props.header && <Header />}
          {props.children}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
