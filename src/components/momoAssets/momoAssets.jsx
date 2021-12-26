import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const SectionHeader = () => {
    return (
    <StaticImage 
      src="../../assets/momo_w_pointing_stick.png"
      alt="Momo with a pointer"
      className="momo-header" 
      width={100}
    />
    )
  }

  export default SectionHeader