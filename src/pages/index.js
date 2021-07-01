import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const MainPage = () => (
  <Layout>
    <Seo title="Home" />
  </Layout>
)

export default MainPage
