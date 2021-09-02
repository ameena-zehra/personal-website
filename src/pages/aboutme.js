import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Banner from "../components/aboutmebanner"
import ProjectsBanner from "../components/projectsbanner"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const MainPage = () => (
  
  <div>
    <Helmet> <title> About Me | Ameena's Portfolio Website</title> </Helmet>
    <Header/>
    <Banner />
    <Footer/>

  </div>
  
)

export default MainPage
