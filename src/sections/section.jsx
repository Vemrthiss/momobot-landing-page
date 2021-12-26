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
                <p>Hello there</p>
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
                <p>Hello there</p>
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
                <p>Hello there</p>
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