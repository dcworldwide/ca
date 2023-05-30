import { Link } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { PostsIndexQueryResult } from "../queries/queries"

export default function Navigation() {

  const data: PostsIndexQueryResult = useStaticQuery(POST_INDEX_QUERY)

  return (
    <>
      <ul>
        {data?.allMdx?.edges.map(post => {
          return <li><Link to={`${post.node.frontmatter.slug}`}>{post.node.frontmatter.slug}</Link></li>
        })}
      </ul>
    </>
  )
}

// TODO move to queries.ts when supported
const POST_INDEX_QUERY = graphql`
 query {
     allMdx(sort: {fields: frontmatter___date, order: ASC}) {
         edges {
             node {
                 ...PostIndexFields
             }
         }
     }
 }
`
