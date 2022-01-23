// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React from "react"

import "./section.styles.css"

import * as Asset from "../components/Assets.jsx"
import Member from "../components/Profile/Profile.jsx"

const Header = (props) => {
    return (
        <div className="flex mx-auto scroll-mt-2 md:scroll-mt-10" id={props.id}>
            <Asset.MomoPointer /> 
            <h1 className="text-2xl md:text-3xl font-bold my-auto ml-2"><span className="text-jp">{props.header_jp}</span> {props.header_en}</h1>
        </div>
    )
}

const Tooltip = (props) => {
    return (
        <a 
            className="underline decoration-dotted hover:text-pink-300"
            title={props.title} href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.text}
        </a>
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
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-5">
                <Asset.TreePlushie 
                    className="row-span-2 max-h-[650px]"
                    imgClassName="border-img"
                />
                <div className="row-span-2 md:row-span-1 md:col-span-2">
                    <p className="pb-5">
                    <abbr title="Modular Mobile Robot">MOMObot</abbr> is an autonomous ground vehicle built for extensibility by students from the Singapore University of Technology and Design! 
                    </p>
                    <p>
                    MOMObot is designed to be both modular and scalable, enabling it to be adapted for a multitude of purposes. In its current configuration, MOMObot serves to welcome and interact visitors to SUTD during events, radiating positivity with its affable nature and unique endearing characteristics.  
                    </p>
                </div>
                
                <div className="section-cell">
                    <p>
                    Based on the <a href="https://linorobot.org/">Linorobot</a> framework, MOMObot is powered by robotics middleware <a href="http://wiki.ros.org/Documentation">ROS</a>. Leveraging on odometry information and various sensors such as Lidar, MoMobot utilizes ROS’s Navigation stack to perform autonomous navigation and obstacle avoidance.
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
    return (
        <div className="section p-10">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body">
                <div className="flex " id="feature-tabs">

                </div>
                <div className="relative">
                    <div className="md:flex">
                            <Asset.MomoRender/>                    
                    </div>
                    <div className="absolute top-36 left-24 z-10">
                        <h3 className="text-xl md:text-lg font-bold my-auto">Endearing and Magical</h3>
                        <p className="w-64">
                            Above all, MOMObot is your friendly neighbourhood robotic assistant. Through an expressive emotions module, MOMO connects with people with its affable design.
                        </p>
                    </div>

                    <div className="absolute top-40 right-0 z-10">
                        <h3 className="text-xl md:text-lg font-bold my-auto">Strong, Safe and Mobile</h3>
                        <p className="w-80">
                            Built around a chassis of aluminum extrusions, MOMObot is capable of supporting payloads in excess of 50kg and can traverse safely across uneven surfaces. Additionally, MOMO’s design enables it to fit into lifts and pass through doorways.
                        </p>
                    </div>
                </div>
                

                <details>
                    <summary className="text-lg font-bold mb-2">Empower</summary>
                    <ol role="list" className="list-decimal max-w-lg ml-8">
                        <li className="mb-3">
                            Endearing and Magical
                            <p>
                                Above all, MOMObot is your friendly neighbourhood robotic assistant. Through an expressive emotions module, MOMO connects with people with its affable design.
                            </p>
                        </li>
                        <li className="mb-5">
                            Strong, Safe and Mobile
                            <p>
                                Built around a chassis of aluminum extrusions, MOMObot is capable of supporting payloads in excess of 50kg and can traverse safely across uneven surfaces. Additionally, MOMO’s design enables it to fit into lifts and pass through doorways.
                            </p>
                        </li>
                    </ol>
                </details>

                <details>
                    <summary className="text-lg font-bold mb-2">Explore</summary>
                    <ol role="list" className="list-decimal max-w-lg ml-8">
                        <li className="mb-3">
                            AI-powered Autonomous Navigation
                            <p>
                                Relying on ROS’s Navigation stack (
                                   <Tooltip 
                                        text="SLAM"
                                        title="Simultaneous Localization and Mapping"
                                        href="https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping" 
                                    /> & <Tooltip 
                                        text="AMCL"
                                        title="Adaptive Monte Carlo Localization"
                                        href="https://github.com/ros-planning/navigation2/tree/main/nav2_amcl" 
                                    />
                                ) and equipped with a suite of sensors (Lidar, Encoders, IMU),  MOMObot is capable of autonomous navigation in both indoor and outdoor environments. 
                            </p>
                        </li>
                        <li className="mb-5">
                            Smart Obstacle Avoidance
                            <p>
                                Safety is not compromised as advanced sensors and tracking technology help identify and avoid both moving and stationary obstacles.
                            </p>
                        </li>
                    </ol>
                </details>

                <details>
                    <summary className="text-lg font-bold mb-2">Customize</summary>
                    <ol role="list" className="list-decimal max-w-lg ml-8">
                        <li className="mb-3">
                            Modular
                            <p>
                                MOMObot’s design allows new hardware to be easily integrated, enabling MOMO to be configurable for a multitude of purposes.
                            </p>
                        </li>
                        <li className="mb-5">
                            Scalable
                            <p>
                                MOMObot can be programmed and adapted to create exciting custom features built upon ROS.
                            </p>
                        </li>
                    </ol>
                </details>

                {/* <p className="py-3">
                    The lidar generates a 2D map of the location, where MoMobot then estimates its position against that map by using a particle filter to track its pose with data obtained from the Lidar, Encoders and an Inertial Measurement Unit (IMU).
                </p> */}
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
                <Asset.VideoPlayer />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export const Team = () => {
    var props = {id:"team", header_jp:"チーム", header_en:"The Team"}
    var teamArray = Array(21).fill({name: "Name", role: "Role"})
    return (
        <div className="section p-10">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            {/* <div className="section-body container" id="team-grid">
                {teamArray.map( (member, i) =>
                    <Member
                        name={member.name}
                        role={member.role}
                        key={i}
                    />
                )}
            </div> */}
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