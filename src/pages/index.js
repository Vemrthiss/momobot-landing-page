import * as React from "react"

import "@fontsource/dm-sans";
import "@fontsource/noto-serif";
import "@fontsource/noto-serif-jp";
import '../scss/main.scss';

import Header from '../sections/Header';
import Navbar from '../components/Navbar';
import * as Section from "../sections/section.jsx"

// markup
const IndexPage = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <main className="main">
        <Section.About/>
        <Section.Features/>
        <Section.Demo/>
        <Section.Team/>
      </main>
    </div>
    
  )
}

export default IndexPage
