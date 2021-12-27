import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const MomoPointer = () => {
    return (
    <StaticImage 
      src="../assets/momo_w_pointing_stick.png"
      alt="Momo with a pointer"
      className="momo-header" 
      width={100}
    />
    )
  }

  export const VideoPlayer = () => {
    return (
    <StaticImage 
      src="../assets/youtube_border.png"
      alt="Media player"
      className="media-player" 
      width={650}
    />
    )
  }