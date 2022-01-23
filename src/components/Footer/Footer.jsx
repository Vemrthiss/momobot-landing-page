import React from "react";

import './Footer.scss';

import Link from '../Link'

const Footer = () => {
    return (
        <div className="footer px-6 py-4 flex flex-col justify-between items-center" id="footer">
            <p>SUTD Organisation of Autonomous Robotics 2022 (<a href="https://soar.opensutd.org/">OpenSUTD</a>)</p>
            <p>
                Designed by 
                <a target="_blank" rel="noopener noreferrer" className="mx-1 underline footer__links" href="https://www.linkedin.com/in/mei-jia-kong/">Mei Jia.</a>
                Developed by
                <a target="_blank" rel="noopener noreferrer" className="mx-1 underline footer__links" href="https://github.com/Vemrthiss">Joel</a>
                and
                <a target="_blank" rel="noopener noreferrer" className="mx-1 underline footer__links" href="https://github.com/shaunnope">Sean</a>
            </p>
        </div>
    )
}

export default Footer