import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Hero from "../components/hero"
import HGroup from "../components/hgroup"
import PostGrid from "../components/homeGrid"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import VGroup from "../components/vgroup"

export const Head = () => (
  <SEO />
)

const AvatarImage = css`
  width: 200px;
  height: 200p;
  max-width: 200px;
  max-height: 200p;
  background: red;

  @media (min-width: 768px) { /* Tablet and up */
    width: 250px;
    height: 250p;
    max-width: 250px;
    max-height: 250p;
    background: pink;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    width: 250px;
    height: 250p;
    max-width: 250px;
    max-height: 250p;
    background: blue;
  }
`

console.log(AvatarImage)

function Avatar() {
  return <HGroup style={{
    // position: "absolute",
    // top: "90%",
    // left: "10%",
    marginTop: "-70px",
    marginLeft: "100px"
  }}>
    <StaticImage
      imgClassName={AvatarImage.name}
      // imgStyle={AvatarImage.styles}
      src={"../images/sunset.png"}
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      height={250}
      width={250}
      style={{
        ...AvatarImage,
        borderRadius: "50%",
        border: "5px solid white"
      }}
    />
    {/* TODO avatar with handle */}
    <VGroup style={{ justifyContent: "center", marginTop: "25px", marginLeft: "20px" }}>
      <div style={{
        fontSize: "2rem",
        fontWeight: 700,
      }}>Your guide, Cebuanna</div>
      <div style={{
        fontSize: "1.5rem",
        color: "#AAA",
        letterSpacing: 0.1
      }}>@cebuanna</div>
    </VGroup>
  </HGroup>
}

export default function IndexPage() {
  return (
    <Layout>
      <VGroup>
        <VGroup style={{ position: "relative" }}>
          <Hero />
          <Avatar />
        </VGroup>
        <PostGrid />
      </VGroup>
    </Layout>
  )
}
