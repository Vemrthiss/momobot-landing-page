import * as React from "react"
import { Helmet } from "react-helmet";

import "@fontsource/dm-sans";
import "@fontsource/noto-serif";
import "@fontsource/noto-serif-jp";
import '../scss/main.scss';

import Header from '../sections/Header';
import Navbar from '../components/Navbar/Navbar';
import * as Section from "../sections/section.jsx";
import Footer from '../components/Footer/Footer.jsx';

import { BreakpointContext, BREAKPOINTS } from "../helpers/breakpointContext";

// MUI theming context provider, this customises MUI's theming
import {ThemeProvider, createTheme} from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFBFC4'
    },
    secondary: {
      main: '#E298A5'
    }
  },
  typography: {
    fontFamily: ['DM Sans']
  }
})

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="../assets/momo_icon.png"/>
        <title>MOMObot &mdash; The Cute Autonomous Peach Robot</title>
      </Helmet>

      <div className="app selection:bg-pink-200 selection:text-pink-900">
        <ThemeProvider theme={theme}>
          <BreakpointContext.Provider value={BREAKPOINTS}>
            <Navbar/>
            <Header/>
            <main className="main">
              <Section.About/>
              <Section.Features/>
              <Section.Demo/>
              <Section.Team/>
            </main>
            <Footer/>
          </BreakpointContext.Provider>
        </ThemeProvider>
      </div>
    </>
  )
}

export default IndexPage
