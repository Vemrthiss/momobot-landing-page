import * as React from "react"
import Header from '../sections/Header';
import "@fontsource/dm-sans";
import '../scss/main.scss';

import AboutSection from "../sections/aboutSection/about"
import MomoAssets from '../components/momoAssets/momoAssets';
import Navbar from '../components/Navbar';

// markup
const IndexPage = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <main className="main">
        <AboutSection />
        <MomoAssets/>
      </main>
    </div>
    
  )
}

export default IndexPage
