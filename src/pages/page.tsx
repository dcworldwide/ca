// import { MDXProvider } from "@mdx-js/react"
// import { graphql } from "gatsby"
// import React from "react"

// interface DataProps {
//   mdx: {
//     body: string
//     frontmatter: {
//       title: string
//       date: string
//     }
//   }
// }


// const Page = (props: { data: DataProps, children: React.ReactElement }) => {

//   console.log(props)
//   const { data, children } = props as any

//   const Post = data.mdx

//   const components = {
//     h1: (props: any) => (
//       <h1 style={{ color: "red", fontSize: "60px", fontWeight: "bold" }} {...props} />
//     ),
//     h2: (props: any) => (
//       <h2 style={{ color: "red", fontSize: "60px", fontWeight: "bold" }} {...props} />
//     ),
//     tr: (props: any) => (
//       <tr style={{ background: "pink" }} {...props} />
//     ),
//     td: (props: any) => (
//       <td style={{ background: "pink" }} {...props} />
//     ),
//   }



//   return (

//     <div>
//       <ul>
//         {data.allMdx.edges.map((post: any, index: number) => <li>{post.node.frontmatter.title}</li>)}
//       </ul>
//       {/* <h1>{post.frontmatter.title}</h1>
//       <div>{post.frontmatter.date}</div> */}
//       {/* <div>{post.body}</div> */}
//       <MDXProvider components={components}>
//         {/* <Post /> */}
//       </MDXProvider>
//     </div>
//   )
// }

// export default Page

// export const query = graphql`
//   query($slug: String!) {
//     mdx(frontmatter: { slug: { eq: $slug } }) {
//       id
//       body
//       frontmatter {
//         slug
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//     allMdx(sort: {fields: frontmatter___date, order: ASC}) {
//         edges {
//             node {
//                 id
//                 frontmatter {
//                     date(formatString: "YYYY MM Do")
//                     title
//                     slug
//                 }
//             }
//         }
//     }
//   }
// `