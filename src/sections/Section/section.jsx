import React from "react"

import SectionHeader from "../../components/momoAssets/momoAssets.jsx"

const Section = (props) => {
    return (
        <div className="section">
            <div className="section-header" id={this.props.id}>
                <SectionHeader />
                <h1> <span>{this.props.header_jp}</span> {this.props.header_en}</h1>
            </div>
            <div className="section-body">
                <p>Hello there</p>
            </div>
        </div>
    )
}

export default Section