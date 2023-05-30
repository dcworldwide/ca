import { graphql } from 'gatsby'

export const PostIndexFragment = graphql`
    fragment PostIndexFields on Mdx {
        id
        frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
            slug
            tags
        }
    }
`

export const PostFragment = graphql`
    fragment PostFields on Mdx {
        id
        body
        frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
            slug
            tags
        }
    }
`

export interface MdxProps {
    id: string
    body: string
    frontmatter: {
        slug: string
        title: string
        date: string
        tags: string[]
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



