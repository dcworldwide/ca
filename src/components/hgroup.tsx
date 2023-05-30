
import styled from "@emotion/styled"
import React from "react"

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

export default function HGroup(props) {
  return <Wrapper>{props.children}</Wrapper>
}