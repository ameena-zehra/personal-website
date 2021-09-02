import * as React from "react"
import Header from "../components/header"
import Banner from "../components/habbitsection"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const MainPage = () => (
  
  <div>
    <Helmet> <title> Habbit | Ameena's Portfolio Website</title> </Helmet>
    <Header />
    <Banner />
    <Footer/>

    

  </div>
  
  
)

export default MainPage
