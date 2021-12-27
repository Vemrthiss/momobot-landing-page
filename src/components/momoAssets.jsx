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

export const BorderRect = () => {
  return (
  <StaticImage 
    src="../assets/stamp_border_rectangle.png"
    alt="Rectangle"
    className="border-rectangle" 
    width={250}
  />
  )
}

export const BorderSq = () => {
  return (
  <StaticImage 
    src="../assets/stamp_border_square.png"
    alt="Rectangle"
    className="border-square" 
    width={250}
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