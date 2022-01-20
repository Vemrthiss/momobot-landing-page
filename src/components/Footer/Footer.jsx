import React from "react";

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer py-4 flex flex-col justify-between items-center" id="footer">
            <p>SUTD Organisation of Autonomous Robotics 2022 (<a href="https://soar.opensutd.org/">OpenSUTD</a>)</p>
            <p>Designed by Mei Jia. Developed by Joel and Sean</p>
        </div>
    )
}

export default Footer