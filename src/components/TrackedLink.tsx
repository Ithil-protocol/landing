/** @jsxRuntime classic */

import React, { useCallback, FunctionComponent } from "react";

export const TrackedLink = (props: { hotjar: any, title: string, target: string, url: string, children: any }) => {
    const { title, target, url, hotjar } = props

    const sendRequest = useCallback(async () => {
        hotjar.event(`${title} button was clicked to visit url ${url}`);
    }, [url])

    return (
        <a href={url} target={target} title={title} onClick={sendRequest}>
            {props.children}
        </a>
    )
}
