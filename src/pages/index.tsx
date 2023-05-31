import styled from "@emotion/styled"
import React from "react"
import Hero from "../components/hero"
import HGroup from "../components/hgroup"
import PostGrid from "../components/homeGrid"
import { ConstrainedImageComponent } from "../components/image"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import VGroup from "../components/vgroup"

export const Head = () => (
  <SEO />
)

const AvatarContainer = styled("div")`
  
  margin-top: -70px;
  margin-left: 30px;

  @media (min-width: 768px) { /* Tablet and up */
    margin-top: -70px;
    margin-left: 100px;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    margin-top: -70px;
    margin-left: 100px;
  }
`

const AvatarImage = styled("div")`
  
  width: 200px;
  height: 200p;
  max-width: 200px;
  max-height: 200p;

  @media (min-width: 768px) { /* Tablet and up */
    width: 250px;
    height: 250p;
    max-width: 250px;
    max-height: 250p;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    width: 250px;
    height: 250p;
    max-width: 250px;
    max-height: 250p;
  }
`

const AvatarHeading1 = styled("div")`
  
  font-size: 1.5rem;
  font-weight: 700;

  @media (min-width: 768px) { /* Tablet and up */
    font-size: 2rem;
    font-weight: 700;
  }

  @media (min-width: 1024px) { /* Large devices and up */
    font-size: 2rem;
    font-weight: 700;
  }
`

const AvatarHeading2 = styled("div")`
  
  font-size: 1rem;
  font-weight: 700;
  color: #aaa;
  letter-spacing: 0.1;

  @media (min-width: 768px) { /* Tablet and up */
  font-size: 1.5rem;
    font-weight: 700;
  }

  @media (min-width: 1024px) { /* Large devices and up */
  font-size: 1.5rem;
    font-weight: 700;
  }
`


function Avatar() {
  return <AvatarContainer>
    <HGroup>
      <AvatarImage>
        <ConstrainedImageComponent
          imageName="sunset"
          style={{
            borderRadius: "50%",
            border: "5px solid white"
          }} />
      </AvatarImage>
      <VGroup style={{ justifyContent: "center", marginTop: "25px", marginLeft: "20px" }}>
        <AvatarHeading1>Your guide, Cebuanna</AvatarHeading1>
        <AvatarHeading2>@cebuanna</AvatarHeading2>
      </VGroup>
    </HGroup>
  </AvatarContainer>
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
