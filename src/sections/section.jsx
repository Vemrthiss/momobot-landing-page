// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React from "react"

import "./section.styles.css"

import * as Asset from "../components/Assets.jsx"
import Member from "../components/Profile/Profile.jsx"

const Header = (props) => {
    return (
        <div className="flex mx-auto" id={props.id}>
            <Asset.MomoPointer /> 
            <h1 className="text-2xl md:text-3xl font-bold my-auto ml-2"><span className="text-jp">{props.header_jp}</span> {props.header_en}</h1>
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
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-3">
                <Asset.BorderRect 
                    className="row-span-2"
                />
                <div className="row-span-2 md:row-span-1 md:col-span-2">
                    <p className="pb-5">
                    <abbr title="Modular Mobile Robot">MoMobot</abbr> is a service autonomous ground vehicle built for extensibility by students from the Singapore University of Technology and Design! 
                    </p>
                    <p>
                    MoMobot is designed to be both modular and scalable, enabling it to be adapted for a multitude of purposes. In its current configuration, MoMobot serves to welcome and interact visitors to SUTD during events, radiating positivity with its affable nature and unique endearing characteristics.  
                    </p>
                </div>
                
                <div className="section-cell">
                    <p>
                    Based on the <a href="https://linorobot.org/">Linorobot</a> framework, MoMobot is powered by robotics middleware <a href="http://wiki.ros.org/Documentation">ROS</a>. Leveraging on odometry information and various sensors such as Lidar, MoMobot utilizes ROS’s Navigation stack to perform autonomous navigation and obstacle avoidance.
                    </p>
                </div>
                <div className="section-cell">
                    <Asset.BorderRect
                        className="rotate-90 translate-x-9"
                    />
                </div>
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
                                Relying on ROS’s Navigation stack (<a class="underline decoration-dotted" title="Simultaneous Localization and Mapping" href="https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping" target="_blank">SLAM</a> & <a class="underline decoration-dotted" title="Adaptive Monte Carlo Localization" href="https://github.com/ros-planning/navigation2/tree/main/nav2_amcl" target="_blank">AMCL</a>) and equipped with a suite of sensors (Lidar, Encoders, IMU);  MoMobot is capable of autonomous navigation in both indoor and outdoor environments. 
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
                                MoMobot’s design enables it to be configurable for a multitude of purposes where new hardware can be easily integrated.
                            </p>
                        </li>
                        <li className="mb-5">
                            Scalable
                            <p>
                                MoMobot can be programmed and adapted to create exciting custom features built on top of ROS.
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
    var props = {id:"product-demo", header_jp:"デモ", header_en:"demomo"}
    return (
        <div className="section">
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
    var props = {id:"team", header_jp:"チーム", header_en:"the team"}
    var teamArray = Array(21).fill({name: "Name", role: "Role"})
    return (
        <div className="section">
            <Header 
                id={props.id}
                header_jp={props.header_jp}
                header_en={props.header_en}
            />
            <div className="section-body container" id="team-grid">
                {teamArray.map( (member, i) =>
                    <Member
                        name={member.name}
                        role={member.role}
                        key={i}
                    />
                )}
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