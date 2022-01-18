import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

function Header() {
    return (
        <div className="header relative">
            <StaticImage src="../assets/site_banner.png"
                         alt="team picture"
                         className="hero-image"/>
            <div className="momo-banner">
                <StaticImage src="../assets/momobot_header.svg"
                             alt="momo banner"
                             className="momo-banner__image"/>
                {/* <StaticImage src="../assets/momobot_header_w_animation.svg"
                             alt="momo animation"
                             className="momo-animation"/> */}
                <div className="text-jp flex justify-between items-start pt-10 w-4/5 md:w-3/5 sm:text-xl lg:text-3xl momo-banner__text">
                    <div className="flex flex-col">
                        <p>
                            <span className="momo-banner__momo-text">もも </span>
                            /mo-mo/
                            <span className="italic font-bold">  n.</span>
                        </p>
                        <div className="text-base pt-3">
                            <ol className="list-decimal list-inside">
                                <li className="pb-1">peach</li>
                                <li>Modular Mobility</li>
                            </ol>
                        </div>
                    </div>
                    
                    <p>(japanese)</p>
                </div>
            </div>
        </div>
    )
}

export default Header;