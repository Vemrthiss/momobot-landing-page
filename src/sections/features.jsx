import React from "react";

import * as Link from "../components/Link"

export const Button = (props) => {
    return (
        <button type="button" className="p-2 m-2 rounded-lg bg-pink-300 hover:bg-red-200" id={props.id} onClick={props.onClick}>
            {props.text}
        </button>
    )
}


export const Empower = () => {
    return (
        <div id="features">
            <div class="absolute top-36 left-24 z-10">
                <h3 className="text-xl md:text-lg font-bold my-auto">Endearing and Magical</h3>
                <p class="w-64">
                    Above all, MOMObot is your friendly neighbourhood robotic assistant. Through an expressive emotions module, MOMO connects with people with its affable design.
                </p>
            </div>

            <div class="absolute top-40 right-10 z-10">
                <h3 className="text-xl md:text-lg font-bold my-auto">Strong, Safe and Mobile</h3>
                <p class="w-80">
                    Built around a chassis of aluminum extrusions, MOMObot is capable of supporting payloads in excess of 50kg and can traverse safely across uneven surfaces. Additionally, MOMO’s design enables it to fit into lifts and pass through doorways.
                </p>
            </div>
        </div>
    )
}

export const Explore = () => {
    return (
        <div id="features">
            <div class="absolute top-36 left-24 z-10">
                <h3 className="text-xl md:text-lg font-bold my-auto">AI-powered Autonomous Navigation</h3>
                <p class="w-64">
                    Relying on ROS’s Navigation stack (
                        <Link.Tooltip 
                            text="SLAM"
                            title="Simultaneous Localization and Mapping"
                            href="https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping" 
                        /> & <Link.Tooltip 
                            text="AMCL"
                            title="Adaptive Monte Carlo Localization"
                            href="https://github.com/ros-planning/navigation2/tree/main/nav2_amcl" 
                        />
                    ) and equipped with a suite of sensors (Lidar, Encoders, IMU),  MOMObot is capable of autonomous navigation in both indoor and outdoor environments.
                </p>
            </div>

            <div class="absolute top-40 right-10 z-10">
                <h3 className="text-xl md:text-lg font-bold my-auto">Smart Obstacle Avoidance</h3>
                <p class="w-80">
                    Safety is not compromised as advanced sensors and tracking technology help identify and avoid both moving and stationary obstacles.
                </p>
            </div>
        </div>
    )
}

export const Customize = () => {
    return (
        <div id="features">
            <div class="absolute top-36 left-24 z-10">
                <h3 className="text-xl md:text-lg font-bold my-auto">Modular</h3>
                <p class="w-64">
                    MOMObot’s design allows new hardware to be easily integrated, enabling MOMO to be configurable for a multitude of purposes.
                </p>
            </div>

            <div class="absolute top-40 right-10 z-10">
                <h3 className="text-xl md:text-lg font-bold my-auto">Scalable</h3>
                <p class="w-80">
                    MOMObot can be programmed and adapted to create exciting custom features built upon ROS.
                </p>
            </div>
        </div>
    )
}