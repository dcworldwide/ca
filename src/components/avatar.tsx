import styled from "@emotion/styled"
import React from "react"

const RoundedImage = styled("div")`
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
`

export interface AvatarProps {
    style?: React.CSSProperties
    children
}

export default function Avatar(props: AvatarProps) {
    const { style, children } = props
    return <RoundedImage>
        {children}
    </RoundedImage>
}