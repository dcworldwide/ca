import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import { MDXProvider } from "@mdx-js/react"
import React from "react"

const markdownRenderers = {
    // h1: (props: any) => (
    //     <h1 style={{ fontSize: "60px", fontWeight: "bold" }} {...props} />
    // ),
    // h2: (props: any) => (
    //     <h2 style={{ fontSize: "60px", fontWeight: "bold" }} {...props} />
    // ),
    // table: (props: any) => (
    //     <table style={{ background: "pink" }} {...props} />
    // ),
    // tr: (props: any) => (
    //     <tr style={{ background: "pink" }} {...props} />
    // ),
    // td: (props: any) => (
    //     <td style={{ background: "pink" }} {...props} />
    // ),
}


const Root = styled("div")`

`

const globalStyles = css`

    body {
        margin: 0;
        font-family: Inter;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "kern";
        line-height: 1.5;
        font-weight: 400;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.125rem;
        line-height: 1.7777778;
    }

    @media screen and (min-width: 640px) {
        font-size: 1rem;
        line-height: 1.75;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Crimson Pro";
        font-weight: 700;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2.1rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    summary {
        text-transform: uppercase;
        font-weight: bold;
    }

    ul {
        list-style-type: none;
    }
`

export default function Layout(props: { children }) {
    return (
        <Root>
            <Global styles={globalStyles} />
            <MDXProvider components={markdownRenderers}>{props.children}</MDXProvider>
        </Root>
    )
}