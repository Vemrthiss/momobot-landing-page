import React from "react"

import "./Profile.styles.css"

import { StaticImage } from "gatsby-plugin-image"
// import { BorderSq } from "../Assets.jsx"

export const Blank = () => {
    return (
      <div className="center">
        <StaticImage 
        src="../assets/blank_avatar.png"
        alt="Avatar"
        imgClassName="border-img" 
        width={144}
      />
      </div>
      
    )
  }

const Profile = (props) => {
    return (
        <div className="team-cell">
            <Blank/>
            <p>
                {props.name} <br/> {props.role}
            </p>
        </div>
        
    )
}

export default Profile