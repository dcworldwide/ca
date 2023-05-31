import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby-link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { PostsIndexQueryResult } from "../queries/queries"
import HGroup from "./hgroup"
import VGroup from "./vgroup"

const GridContainer = styled("div")`
  
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  flex-grow: 1;
  
  @media (min-width: 768px) { /* Tablet and up */
    gap: 20px;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    gap: 30px;
  }
`

const Card = styled("div")`

  page-break-inside: avoid;
  break-inside: avoid;
  box-sizing: border-box;
  display: inline-block; 
  max-width: 500px;
  
  border-radius: 18px; //12px 12px 8px 8px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.14);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.12);
  }
`

const CardText = styled("div")`
  color: inherit;
  padding: 12px;
  color: inherit;
  text-decoration: none;
`

const CardTitle = styled("div")`
  // color: #AAA;
  font-size: 1.5rem;
  font-weight: 700;
`

const CardDesc = styled("div")`
  font-size: 1rem;
  margin: 10px 0px 20px 0px;
`

const PageTag = styled("div")`
  background: #AAA;
  padding: 4px 6px;
  color: #FFF;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.8rem;
`

export default function PostGrid() {

  const data: PostsIndexQueryResult = useStaticQuery(POST_INDEX_QUERY)

  return (
    <VGroup style={{
      justifyContent: "center",
      alignItems: "center", /* Aligns grid to the top */
      margin: "15px"
    }}>
      <GridContainer>
        {data?.allMdx?.edges?.map(post => {

          let featuredImg = getImage(post.node.frontmatter.image?.childImageSharp?.gatsbyImageData)

          console.log(post.node.frontmatter.image)

          return <Card key={post.node.id}>
            <Link to={`${post.node.frontmatter.slug}`}>
              <GatsbyImage
                image={featuredImg} alt="TODO"
                style={{
                  borderRadius: "18px 18px 0px 0px",
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                  // maxHeight: 600,
                }}
              />
              <CardText>
                {/* <div>{post.node.frontmatter.image}</div> */}
                <CardTitle>{post.node.frontmatter.title}</CardTitle>
                <CardDesc>{post.node.frontmatter.description}</CardDesc>
                <HGroup style={{ gap: 4 }}>{post.node.frontmatter.tags.map(x => {
                  return <PageTag>{x}</PageTag>
                })}
                </HGroup>
              </CardText>
            </Link>
          </Card>
        })}
      </GridContainer>
    </VGroup >
  )
}

// TODO move to queries.ts when supported
const POST_INDEX_QUERY = graphql`
 query {
    allMdx(sort: {frontmatter: {rank: ASC}}) {
         edges {
             node {
                ...PostIndexFields
                frontmatter {
                    image {
                      childImageSharp {
                          gatsbyImageData(width: 800)
                      }
                    }
                }
             }
         }
     }
 }
`  