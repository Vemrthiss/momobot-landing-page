import React from "react"

import "./Profile.styles.css"

import { BorderSq } from "../Assets.jsx"

const Profile = (props) => {
    return (
        <div className="team-cell">
            <BorderSq/>
            <p>
                {props.name} <br/> {props.role}
            </p>
        </div>
        
    )
}

export default Profile