import React, { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import animationGif from '../assets/momo_animation.gif';

function Header() {
    useEffect(() => {
        console.log({animationGif});
    }, []);

    return (
        <div className="header relative">
            <StaticImage src="../assets/updated-bg.png"
                         alt="team picture"
                         className="hero-image"/>
            <div className="momo-banner">
                <StaticImage src="../assets/momobot_header.svg"
                             alt="momo banner"
                             className="momo-banner__image"/>
                {/* <img src={animationGif} alt="momobot animation" /> */}
                {/* <StaticImage src="../assets/momobot_header_w_animation.svg"
                             alt="momo animation"
                             className="momo-animation"/> */}
                <div className="text-jp flex justify-between items-center w-4/5 md:w-3/5 sm:text-xl lg:text-3xl momo-banner__text">
                    <p>
                        <span className="momo-banner__momo-text">もも</span>
                        /mo-mo/
                        <span className="italic font-bold">  n.</span>
                    </p>
                    <p>(japanese)</p>
                </div>
            </div>
        </div>
    )
}

export default Header;