import React from "react"

import SectionHeader from "../../components/momoAssets/momoAssets.jsx"

const DemoSection = () => {
    return (
        <div className="section">
            <div className="section-header">
                <SectionHeader />
                <h1> <span>デモ</span> Demo Video</h1>
            </div>
            <div className="section-body">
                <p>Hello there</p>
            </div>
        </div>
    )
}

export default DemoSection