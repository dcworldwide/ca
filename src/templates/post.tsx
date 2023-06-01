import { graphql, Link } from "gatsby"
import React from "react"
import { Hero2, HeroText } from "../components/hero"
import HGroup from "../components/hgroup"
import Layout from "../components/layout"
import TableOfContents from "../components/toc"
import VGroup from "../components/vgroup"
import useMediaQuery, { MEDIA_QUERY_TABLET } from "../hooks/useMediaQuery"
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

  const isTabletOrLarger = useMediaQuery(MEDIA_QUERY_TABLET)

  return (
    <Layout style={{ background: "#eee" }}>
      <Hero2 imageBytes={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData}>
        {/*  image="hero3" */}
        <HeroText>{data.mdx.frontmatter.title}</HeroText>
      </Hero2>
      <div style={{
        position: "relative",
        margin: "-60px 20px 0px 20px",
        background: "#fff",
        padding: isTabletOrLarger ? "30px" : "30px",
        borderRadius: "20px 20px 0px 0px"
      }}>
        <Link to="/">Home</Link>
        {isTabletOrLarger
          ? <HGroup>
            <div style={{ width: "70%", marginRight: 30 }}>
              {children}
            </div>
            <div style={{ width: "30%" }}>
              <div style={{ position: "sticky", top: 30 }}>
                <TableOfContents items={data?.mdx?.tableOfContents?.items || []} />
              </div>
            </div>
          </HGroup>
          : <VGroup>
            <TableOfContents items={data?.mdx?.tableOfContents?.items || []} />
            {children}
          </VGroup>
        }
      </div>
    </Layout>
  )
}

export default Page
