// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React from "react"

import MomoPointer from "../components/momoAssets.jsx"

const Header = (props) => {
    return (
        <div className="section-header" id={props.id}>
            <h1><MomoPointer /> <span className="text-jp">{props.header_jp}</span> {props.header_en}</h1>
        </div>
    )
}

export const About = () => {
    var props = {id:"about", header_jp:"ついて", header_en:"about momo"}
    return (
        <div className="section">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export const Features = () => {
    var props = {id:"features", header_jp:"特徴", header_en:"features"}
    return (
        <div className="section">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
        </div>
    )
}

export const Demo = () => {
    var props = {id:"product-demo", header_jp:"デモ", header_en:"demomo"}
    return (
        <div className="section">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export const Team = () => {
    var props = {id:"team", header_jp:"チーム", header_en:"the team"}
    return (
        <div className="section">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <p>Hello there</p>
            </div>
        </div>
    )
}

export const Remote = () => {
    var props = {id:"remote", header_jp:"", header_en:""}
    return (
        <div className="section">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <p>Hello there</p>
            </div>
        </div>
    )
}

export default Header