/** @jsxRuntime classic */

import React, { useCallback, FunctionComponent } from "react"

export const TrackedLink = (props: {
  title?: string
  target: string
  url: string
  children: any
}) => {
  const { title, target, url } = props

  return (
    <a href={url} target={target} title={title} {...props}>
      {props.children}
    </a>
  )
}
