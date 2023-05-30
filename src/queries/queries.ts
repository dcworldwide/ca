import { graphql } from 'gatsby'

export const PostIndexFragment = graphql`
    fragment PostIndexFields on Mdx {
        id
        frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
            slug
            tags
            rank
        }
    }
`

export const PostFragment = graphql`
    fragment PostFields on Mdx {
        id
        body
        tableOfContents
        frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
            slug
            tags
            rank
        }
    }
`

export interface MdxProps {
    id: string
    body: string
    tableOfContents
    frontmatter: {
        slug: string
        title: string
        date: string
        tags: string[]
        rank: number
    }
}


export interface PostsIndexQueryResult {
    allMdx: {
        edges: {
            node: Omit<MdxProps, "body">
        }[]
    }
}

export interface PostsQueryResult {
    allMdx: {
        edges: {
            node: MdxProps
        }[]
    }
}



