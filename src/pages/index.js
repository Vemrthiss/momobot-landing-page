import * as React from "react"
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <link rel="icon" href="../assets/momo_icon.png"/>
        <title>MOMObot &mdash; The Cute Autonomous Peach Robot</title>
      </Helmet>

      <div className="app selection:bg-pink-200 selection:text-pink-900">
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
    </>
  )
}

export default IndexPage
