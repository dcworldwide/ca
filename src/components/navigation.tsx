import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby-link"
import React from "react"
import { PostsIndexQueryResult } from "../queries/queries"

export default function Navigation() {

  const data: PostsIndexQueryResult = useStaticQuery(POST_INDEX_QUERY)

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        {data?.allMdx?.edges?.map(post => {
          return <li><Link to={`${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link></li>
        })}
      </ul>
    </>
  )
}

// TODO move to queries.ts when supported
const POST_INDEX_QUERY = graphql`
 query {
    allMdx(sort: {frontmatter: {date: ASC}}) {
         edges {
             node {
                 ...PostIndexFields
             }
         }
     }
 }
`
