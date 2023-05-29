import { graphql } from "gatsby"
import React from "react"

interface DataProps {
  mdx: {
    body: string
    frontmatter: {
      title: string
      date: string
    }
  }
}

export function Page({ data, children }: any) {
  return (
    <>
      <ul>
        {data.allMdx.edges.map(post => {
          return <li><a href={`${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</a></li>
        })}
      </ul>
      <h1>{data.mdx.frontmatter.title}</h1>
      {children}
    </>
  )
}

export default Page

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
        edges {
            node {
                id
                frontmatter {
                    date(formatString: "YYYY MM Do")
                    title
                    slug
                }
            }
        }
    }
  }
`