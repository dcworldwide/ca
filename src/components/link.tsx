import styled from "@emotion/styled"
import { Link as InternalLink } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { stripHttp } from "../utils/string"

export const LinkColour = "cadetblue"

const UntyledLocalLink = styled(InternalLink)`
    color: inherit;
`

const StyledLocalLink = styled(InternalLink)`
    color: cadetblue;
`

const StyledOutboundLink = styled(OutboundLink)`
    color: burlywood;
`

export function Link(props) {
    return <StyledLocalLink {...props} />
}
export function UnstyledLink(props) {
    return <UntyledLocalLink {...props} />
}

export function RemoteLink(props) {
    console.log(props)

    const label = stripHttp(props?.children?.props?.href)

    return <StyledOutboundLink target="blank" href={props.children.props.href}>
        {label}
    </StyledOutboundLink>
}

