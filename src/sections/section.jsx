import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./section.styles.css"

import * as Asset from "../components/Assets.jsx"
import * as SFeat from "./features.jsx"
import Stepper from "../components/Stepper.jsx"

const Header = (props) => {
    return (
        <div className="flex mx-auto scroll-mt-2 md:scroll-mt-10" id={props.id}>
            <Asset.MomoPointer /> 
            <h1 className="text-2xl md:text-3xl font-bold my-auto ml-2"><span className="text-jp">{props.header_jp}</span> {props.header_en}</h1>
        </div>
    )
}


export const About = () => {
    var props = {id:"about", header_jp:"ついて", header_en:"About MOMO"}
    return (
        <div className="section p-10">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="lg:px-40 md:grid md:grid-cols-3 md:grid-rows-2 gap-5">
                <Asset.TreePlushie 
                    className="row-span-2 max-h-[650px]"
                    imgClassName="border-img"
                />
                <div className="row-span-2 md:row-span-1 md:col-span-2 my-3 text-justify">
                    <p className="pb-5">
                    <abbr title="Modular Mobile Robot">MOMObot</abbr> is an autonomous ground vehicle built for extensibility by students from the Singapore University of Technology and Design! 
                    </p>
                    <p>
                    MOMObot is designed to be both modular and scalable, enabling it to be adapted for a multitude of purposes. In its current configuration, MOMObot serves to welcome and interact visitors to SUTD during events, radiating positivity with its affable nature and unique endearing characteristics.  
                    </p>
                </div>
                
                <div className="section-cell mb-3 text-justify">
                    <p>
                    Based on the <a href="https://linorobot.org/">Linorobot</a> framework, MOMObot is powered by robotics middleware <a href="http://wiki.ros.org/Documentation">ROS</a>. Leveraging on odometry information and various sensors such as Lidar, MOMObot utilizes ROS’s Navigation stack to perform autonomous navigation and obstacle avoidance.
                    </p>
                </div>
                <div className="section-cell">
                    <Asset.Teensy
                    className="max-h-72"
                        imgClassName="border-img"
                    />
                </div>
            </div>
        </div>
    )
}

export const Features = () => {
    var props = {id:"features", header_jp:"特徴", header_en:"Features"}

    // tabs (0: Empower; 1: Explore; 2: Customise)
    const [tab, setTab] = useState(0);

    return (
        <div className="section p-10">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <Tabs
                    value={tab}
                    onChange={(e, newVal) => setTab(newVal)}
                    centered
                    textColor="secondary"
                    indicatorColor="secondary"
                    className="tabs"
                >
                    <Tab label="Empower" />
                    <Tab label="Explore" />
                    <Tab label="Customise" />
                </Tabs>
                <div class="relative features-render__parent">
                    <iframe src="https://mymail2822.autodesk360.com/shares/public/SH35dfcQT936092f0e432cfe11f3445b1099?mode=embed"
                            allowfullscreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true" 
                            frameborder="0"
                            className="mx-auto w-full h-screen features-render"
                            title="MOMObot Render"></iframe>
                    <div id="features-block" className="text-justify">
                        {tab === 0 ? <SFeat.Empower/> : ""}
                        {tab === 1 ? <SFeat.Explore/> : ""}
                        {tab === 2 ? <SFeat.Customize/> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Demo = () => {
    var props = {id:"product-demo", header_jp:"デモ", header_en:"Demo"}
    return (
        <div className="section p-10">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <iframe src="https://www.youtube.com/embed/HBdNo5j251w" className="demo-video" title="MOMObot - Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export const Team = () => {
    var props = {id:"team", header_jp:"チーム", header_en:"The Team"}
    return (
        <div className="section p-10">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="flex justify-center">
                <Stepper/>
            </div>
        </div>
    )
}

export const Remote = () => {
    var props = {id:"remote", header_jp:"", header_en:""}
    return (
        <div className="section p-10">
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