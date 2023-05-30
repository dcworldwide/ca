import { graphql } from "gatsby"
import React from "react"
import HGroup from "../components/hgroup"
import Layout from "../components/layout"
import TableOfContents from "../components/toc"
import VGroup from "../components/vgroup"
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
      <VGroup>
        <h1>{data.mdx.frontmatter.title}</h1>
        <h1>{data.mdx.frontmatter.tags.join(",")}</h1>
        <HGroup>
          <div style={{ width: "80%" }}>{children}</div>
          <div>
            <div style={{ position: "sticky", top: 0 }}>
              <TableOfContents items={data?.mdx?.tableOfContents?.items || []} />
            </div>
          </div>
        </HGroup>
      </VGroup>
    </Layout>
  )
}

export default Page
