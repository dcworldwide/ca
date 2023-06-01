import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import CurrencySelector, { Currency } from "./currencySelector"
import { ViewportHelper } from "./debug"
import { Link, RemoteLink } from "./link"

const markdownRenderers = {
    table: (props: any) => (
        <div style={{ width: "100%", overflowX: "auto" }} {...props}>
            {props.children}
        </div>
    ),
    a: Link,
    OutboundLink: RemoteLink,
    Currency: Currency,
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

    a {
        text-decoration: none;
        color: inherit;
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
        // list-style-type: none;
    }

    table {
        border-collapse: collapse;
        text-indent: initial;
        border-spacing: 2px;
        width: 100%;
    }

    thead tr {
        border-top: none;
        border-bottom: none !important;
    }

    thead th {
        border-top: none;
        border-bottom: none !important;
    }

    th {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        text-align: left;
    }

    td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
`

export default function Layout(props: { children, style?}) {
    return (
        <Root style={props.style}>
            <Global styles={globalStyles} />
            <ViewportHelper />
            <CurrencySelector />
            <MDXProvider components={markdownRenderers}>{props.children}</MDXProvider>
        </Root>
    )
}