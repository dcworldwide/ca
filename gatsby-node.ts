import { GatsbyNode } from "gatsby"
import { createFilePath } from 'gatsby-source-filesystem'
import path from "path"

const postTemplate = path.resolve(`./src/templates/post.tsx`)

// Set up types for our GraphQL queries
interface MdxNode {
    node: {
        id: string,
        frontmatter: {
            slug: string
        }
        internal: {
            contentFilePath: string
        }
    }
}

interface AllMdx {
    allMdx: {
        edges: MdxNode[]
    }
}

// Define createPages function
export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions

    // Query for all Markdown "nodes" and for the slug we added.
    const result = await graphql<AllMdx>(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
  `)

    // Handle errors
    if (result.errors) {
        throw result.errors
    }


    // Create blog post pages.
    result.data?.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,

            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            //component: node.internal.contentFilePath,
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            // component: path.resolve(`./src/pages/page.tsx`),

            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                id: node.id,
                slug: node.frontmatter.slug,
            },
        })
    })
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
    node,
    actions,
    getNode,
}) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value,
        })

        // Example of derived field passed into page
        createNodeField({
            node,
            name: `timeToRead`,
            value: readingTime(node.body)
        })
    }
}

function readingTime(node: any) {
    return 10
}