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

export const MomoRender = () => {
  return (
    <StaticImage
      src="../assets/momobot_render.png"
      alt="Momobot"
      className="momo-render mx-auto" 
      height={500}
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


export const TreePlushie = (props) => {
  return (
  <StaticImage 
    src="../assets/tree_plushie.jpg"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    height={700}
  />
  )
}

export const Teensy = (props) => {
  return (
  <StaticImage 
    src="../assets/pcb_teensy.png"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    width={1280}
  />
  )
}

export const GroupPic1 = (props) => {
  return (
  <StaticImage 
    src="../assets/group_photo_0.jpg"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    width={960}
  />
  )
}

export const GroupPic2 = (props) => {
  return (
  <StaticImage 
    src="../assets/group_photo_1.jpg"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    width={1280}
  />
  )
}

export const GroupPic3 = (props) => {
  return (
  <StaticImage 
    src="../assets/group_photo_2.jpg"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    width={1280}
  />
  )
}

export const GroupPic4 = (props) => {
  return (
  <StaticImage 
    src="../assets/group_photo_3.jpg"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    width={1280}
  />
  )
}

export const GroupPic5 = (props) => {
  return (
  <StaticImage 
    src="../assets/group_photo_4.jpg"
    alt="Media player"
    className={props.className}
    imgClassName={props.imgClassName}
    height={700}
  />
  )
}