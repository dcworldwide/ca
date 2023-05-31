import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export const ConstrainedImageComponent = (props: { imageName, altText?, style?}) => {

    const { imageName, altText, style } = props

    // For responsive images, you'll want to use a layout value of CONSTRAINED or FULL_WIDTH instead of FIXED. 
    // The CONSTRAINED layout will maintain the image’s aspect ratio and resize the image to fit the container while 
    // FULL_WIDTH will grow to fill its container, potentially becoming larger than its pixel size.
    const data = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, width: 800)
                        }
                    }
                }
            }
        }
    `)

    const image = data.allFile.edges.find(edge => edge.node.name === imageName)?.node.childImageSharp?.gatsbyImageData

    if (!image) {
        return null
    }

    return <OptimizedImage image={image} style={style} altText={altText} />
}

const OptimizedImage = ({ image, altText, style }) => {

    return <GatsbyImage
        image={getImage(image)}
        alt={altText}
        style={style}
    // layout="fullWidth"
    // You can optionally force an aspect ratio for the generated image
    // aspectRatio={2 / 1}
    // This is a presentational image, so the alt should be an empty string
    // alt=""
    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
    // src={
    //     // "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589"
    //     props.image
    // }
    // formats={["auto", "webp", "avif"]}
    />
}

export default OptimizedImage