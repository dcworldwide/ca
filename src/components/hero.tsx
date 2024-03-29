import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import OptimizedImage from "./image"

export const HeroText = styled("div")`

  font-family: "Crimson Pro";
  color: #FFF;
  font-size: 1.6rem;
  font-weight: 700;
  
  @media (min-width: 768px) { /* Tablet and up */
    font-size: 3rem;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    font-size: 3.5rem;
  }
`

export interface HeroProps {
  image?: string // TODO
  imageBytes? // TODO
  children
}

export function Hero2(props: HeroProps) {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <OptimizedImage
        image={props.imageBytes}
        altText="TODO"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 500,
        }}
      />
      {/* <ConstrainedImageComponent
        imageName={props.image}
        altText="TODO"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 500,
        }} /> */}
      {/* <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 500,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={2 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          // "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589"
          props.image
        }
        formats={["auto", "webp", "avif"]}
      /> */}
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: 500,
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
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <HeroText>Your guide to the Philippines</HeroText>
      </div>
    </div>
  )
}

export default Hero
