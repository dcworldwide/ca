
import styled from "@emotion/styled"
import React from "react"

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default function VGroup(props) {
    return <Wrapper>{props.children}</Wrapper>
}