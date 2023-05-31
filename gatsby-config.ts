import type { GatsbyConfig } from "gatsby"

// TODO 
// const wrapESMPlugin = (name: string) =>
//   function wrapESM(opts) {
//     return async (...args) => {
//       const mod = await import(name)
//       const plugin = mod.default(opts)
//       return plugin(...args)
//     }
//   }

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Cebuanna",
    siteUrl: `https://www.cebuanna.com`,
    description: `Travel the Philippines like a local with Cebuanna. Your adventure awaits`,
    twitterUsername: `@cebuanna`,
    image: `/gatsby-icon.png`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            // @see https://fonts.google.com/specimen/Inter
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap`,
          },
          {
            // @see https://fonts.google.com/specimen/Crimson+Pro
            name: `Crimson Pro`,
            file: `https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YBXLCETF78",
          // "GA-TRACKING_ID", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          // anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [
            require(`remark-gfm`),
            //wrapESMPlugin(`remark-gfm`), TODO
          ],
          rehypePlugins: [
            // @see https://nickymeuleman.netlify.app/blog/table-of-contents#add-css-ids-to-all-headings
            // @see https://paulie.dev/posts/2022/08/mdx-esm-rehype-packages/
            require('rehype-slug'),
            [require('rehype-autolink-headings'), { behavior: 'wrap' }]
          ]
        },
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `./src/content/posts`
      },
      __key: "posts"
    }
  ]
}


export default config
