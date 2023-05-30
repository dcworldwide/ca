import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { PostsIndexQueryResult } from "../queries/queries"
import VGroup from "./vgroup"

const GridContainer = styled("div")`
  
  /* Responsive Columns */
  column-count: 1;
  column-gap: 15px;
  max-width: 80%; /* Ensures the grid doesn't fill the entire width */
  
  @media (min-width: 768px) { /* Tablet and up */
    column-count: 2;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    column-count: 3;
  }
`

const Card = styled("div")`
  
  // background-color: #f2f2f2;
  margin-bottom: 15px;
  // padding: 15px;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  box-sizing: border-box;
  display: inline-block; 
  width: 100%; 
  
  border-radius: 18px; //12px 12px 8px 8px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`

const CardText = styled("div")`
  color: inherit;
  padding: 12px;
  color: inherit;
  text-decoration: none;
`

const CardTitle = styled("div")`
  color: #CCC;
  font-size: 1.5rem;
  font-weight: 700;
`

export default function PostGrid() {

  const data: PostsIndexQueryResult = useStaticQuery(POST_INDEX_QUERY)

  return (
    <VGroup style={{
      justifyContent: "center",
      alignItems: "flex-start", /* Aligns grid to the top */
      margin: "15px"
    }}>
      <GridContainer>
        {data?.allMdx?.edges?.map(post => {
          return <Card>
            <Link to={`${post.node.frontmatter.slug}`}>
              <StaticImage
                style={{
                  borderRadius: "18px 18px 0px 0px",
                  gridArea: "1/1",
                  // You can set a maximum height for the image, if you wish.
                  // maxHeight: 600,
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                aspectRatio={2 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src={
                  // "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589"
                  "../images/hero3.jpg"
                }
                formats={["auto", "webp", "avif"]}
              />
              <CardText>
                <CardTitle>{post.node.frontmatter.title}</CardTitle>
                <div>{post.node.frontmatter.tags.join(", ")}</div>
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
             }
         }
     }
 }
`
