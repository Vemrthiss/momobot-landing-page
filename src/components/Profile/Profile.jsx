import React from "react"

import "./Profile.styles.css"

import { StaticImage } from "gatsby-plugin-image"
// import { BorderSq } from "../Assets.jsx"

export const Blank = () => {
    return (
      <div className="center">
          <div>
            <StaticImage 
                src="../../assets/blank_avatar.png"
                alt="Avatar"
                imgClassName="border-img"
                width={144}
            />
          </div>
      </div>
      
    )
  }

const Profile = (props) => {
    return (
        <div className="team-cell px-3 py-3">
            <Blank/>
            <p className="py-1">
                {props.name} <br/> {props.role}
            </p>
        </div>
        
    )
}

export default Profile