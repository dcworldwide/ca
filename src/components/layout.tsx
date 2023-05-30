import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Navigation from "./navigation"

// TODO common renders
// const markdownRenderers = {}

const markdownRenderers = {
    h1: (props: any) => (
        <h1 style={{ color: "red", fontSize: "60px", fontWeight: "bold" }} {...props} />
    ),
    h2: (props: any) => (
        <h2 style={{ color: "red", fontSize: "60px", fontWeight: "bold" }} {...props} />
    ),
    table: (props: any) => (
        <table style={{ background: "pink" }} {...props} />
    ),
    tr: (props: any) => (
        <tr style={{ background: "pink" }} {...props} />
    ),
    td: (props: any) => (
        <td style={{ background: "pink" }} {...props} />
    ),
}

export default function Layout(props: { children }) {
    return (
        <div>
            <Navigation />
            <MDXProvider components={markdownRenderers}>{props.children}</MDXProvider>
        </div>
    )
}