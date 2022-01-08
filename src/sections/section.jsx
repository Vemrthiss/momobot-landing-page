// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React from "react"

import "./section.styles.css"

import * as Asset from "../components/Assets.jsx"
import Member from "../components/Profile/Profile.jsx"

const Header = (props) => {
    return (
        <div className="section-header" id={props.id}>
            <Asset.MomoPointer /> 
            <h1 className="text-3xl font-bold"><span className="text-jp">{props.header_jp}</span> {props.header_en}</h1>
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
            <div className="section-body container" id="about-grid">
                <div className="section-cell" id="about-rect-img">
                    <Asset.BorderRect />
                </div>
                <div className="section-cell" id="about-p-1">
                    <p>
                    MoMobot (Modular Mobile Robot) is an autonomous ground service robot by the SUTD Organisation of Autonomous Robotics! 

                    MoMobot is designed to be both modular and scalable, enabling it to be adapted for a multitude of purposes. In its current configuration, MoMobot serves to welcome and interact visitors to SUTD during events, radiating positivity with its affable nature and unique endearing characteristics. 
                    </p>
                </div>
                
                <div className="section-cell" id="about-p-2">
                    <p>
                    Based on the Linorobot framework, MoMobot is powered by robotics middleware ROS, leveraging on SLAM (Simultaneous Localization and Mapping) and AMCL (Adaptive Monte Carlo Localization) packages for autonomous navigation and obstacle avoidance. 
                    </p>
                </div>
                <div className="section-cell" id="about-sq-img">
                    <Asset.BorderSq />
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
                <p className="py-3">
                    Equipped with a suite of sensors, MoMobot is capable of autonomous navigation in both indoor and outdoor environments. 
                    
                    Relying on ROS’s Navigation stack (SLAM & AMCL), data information from odometry and sensor streams are used to output velocity commands to MoMobot.

                    The lidar generates a 2D map of the location, where MoMobot then estimates its position against that map by using a particle filter to track its pose with data obtained from the Lidar, Encoders and an Inertial Measurement Unit (IMU).
                </p>
                <p className="py-3">
                    Safety is not compromised as advanced sensors and tracking technology help identify and avoid both moving and stationary obstacles.
                </p>
                <p className="py-3">
                    MoMobot can be adapted and configured for a multitude of purposes where new exciting applications can be built on top of the robot and ROS. 
                </p>
                <p className="py-3">
                    Interactive and fun feature where users can control MoMobot from its perspective.
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