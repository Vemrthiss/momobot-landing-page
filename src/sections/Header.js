import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

function Header() {
    return (
        <div className="header">
            <StaticImage src="../assets/test_image.png"
                         alt="momo picture"
                         className="header__hero-image"/>
        </div>
    )
}

export default Header;