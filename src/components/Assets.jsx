import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Header() {
  return (
      <div className="header">
          <StaticImage src="../assets/test_image.png"
                       alt="Momo picture"
                       className="header__hero-image"/>
      </div>
  )
}

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

export const BorderRect = (props) => {
  return (
  <StaticImage 
    src="../assets/stamp_border_rectangle.png"
    alt="Rectangle"
    className={props.className}
    imgClassName={props.imgClassName}
    width={250}
  />
  )
}

export const BorderSq = () => {
  return (
    <div className="center">
      <StaticImage 
      src="../assets/stamp_border_square.png"
      alt="Rectangle"
      className="border-square" 
      width={144}
    />
    </div>
    
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