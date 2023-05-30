import styled from "@emotion/styled"
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Navigation from "./navigation"

// TODO common renders
// const markdownRenderers = {}

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
    font-family: Inter;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "kern";
    line-height: 1.5;
    font-weight: 400;
  `

export default function Layout(props: { children }) {
    return (
        <Root>
            <Navigation />
            <MDXProvider components={markdownRenderers}>{props.children}</MDXProvider>
        </Root>
    )
}