import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { MdxProps } from "../queries/queries"

interface DataProps {
  mdx: MdxProps
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      ...PostFields
    }
  }
`

export function Page(props: { data: DataProps, children }) {
  const { data, children } = props
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <h1>{data.mdx.frontmatter.tags.join(",")}</h1>
      {children}
    </Layout>
  )
}

export default Page
