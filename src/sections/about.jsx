import React from "react"

import SectionHeader from "../components/momoAssets.jsx"

const AboutSection = () => {
    return (
        <div className="section" id="about">
            <div className="section-header">
                <SectionHeader />
                <h1> <span>ついて</span> About Us</h1>
            </div>
            <div className="section-body">
                <p>Hello there</p>
            </div>
        </div>
    )
}

export default AboutSection