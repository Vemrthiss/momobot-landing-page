import React from "react";

import './Footer.scss';

import Link from '../Link'

const Footer = () => {
    return (
        <div className="footer py-4 flex flex-col justify-between items-center" id="footer">
            <p>SUTD Organisation of Autonomous Robotics 2022 (<Link href="https://soar.opensutd.org/" text="OpenSUTD"/>)</p>
            <p>Designed by Mei Jia. Developed by Joel and Sean</p>
        </div>
    )
}

export default Footer