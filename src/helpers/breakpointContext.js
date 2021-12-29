import React from "react";

const BREAKPOINTS = {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1400
}
// this is a global CONSTANT and is not expected to change
const BreakpointContext = React.createContext(BREAKPOINTS);

export { BREAKPOINTS, BreakpointContext};