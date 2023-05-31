import { graphql } from "gatsby"
import React from "react"
import { Hero2, HeroText } from "../components/hero"
import HGroup from "../components/hgroup"
import Layout from "../components/layout"
import TableOfContents from "../components/toc"
import { MdxProps, MxdFrontmatterImageBytes } from "../queries/queries"

interface DataProps {
  mdx: MdxProps & MxdFrontmatterImageBytes
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      ...PostFields
      frontmatter {
        image {
          childImageSharp {
              gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`

export function Page(props: { data: DataProps, children }) {
  const { data, children } = props
  console.log(data)
  return (
    <Layout>
      <Hero2 imageBytes={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData}>
        {/*  image="hero3" */}
        <HeroText>{data.mdx.frontmatter.title}</HeroText>
      </Hero2>
      <div style={{ margin: 20 }}>
        <HGroup>
          <div style={{ width: "80%", marginRight: 10 }}>
            {children}
          </div>
          <div style={{ width: "20%" }}>
            <div style={{ position: "sticky", top: 0 }}>
              <TableOfContents items={data?.mdx?.tableOfContents?.items || []} />
            </div>
          </div>
        </HGroup>
      </div>
    </Layout>
  )
}

export default Page
