import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

export const Head = () => (
  <SEO />
)

export default function IndexPage() {
  return (
    <Layout>
      <div>hero</div>
      <div>post grid</div>
    </Layout>
  )
}
