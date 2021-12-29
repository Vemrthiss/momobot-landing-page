import * as React from "react"

import "@fontsource/dm-sans";
import "@fontsource/noto-serif";
import "@fontsource/noto-serif-jp";
import '../scss/main.scss';

import Header from '../sections/Header';
import Navbar from '../components/Navbar/Navbar';
import * as Section from "../sections/section.jsx"

import { BreakpointContext, BREAKPOINTS } from "../helpers/breakpointContext";

// markup
const IndexPage = () => {
  return (
    <div className="app">
      <BreakpointContext.Provider value={BREAKPOINTS}>
        <Navbar/>
        <Header/>
        <main className="main">
          <Section.About/>
          <Section.Features/>
          <Section.Demo/>
          <Section.Team/>
        </main>
      </BreakpointContext.Provider>
    </div>
    
  )
}

export default IndexPage
