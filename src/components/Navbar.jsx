import React, { useState, useEffect } from 'react';
import RemoteButton from './RemoteButton';
import { StaticImage } from "gatsby-plugin-image";
import useThrottle from '../hooks/useThrottle';

export default function Navbar() {
    const [hasScrolled, setHasScrolled] = useState(false)

    const scrollThrottle = useThrottle(() => calculateScroll(), 200);

    const calculateScroll = () => {
        if (window.scrollY > 0) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollThrottle);
    }, []);

    return (
        <div className={hasScrolled ? 'navbar navbar--scrolled flex justify-content-between align-items-center py-1 px-2' : 'navbar flex justify-content-between align-items-center py-1 px-2'}>
            <div className="navbar__left">
                <a href="#">
                    <StaticImage
                        src="../assets/soar_logo_white.png"
                        alt="soar logo"
                        width={100}
                        className={hasScrolled ? 'navbar__image navbar__image--scrolled': 'navbar__image'}
                    />
                </a>
            </div>
            <div className="navbar__right flex align-items-center">
                <a className={hasScrolled ? "mx-3 navbar__link navbar__link--scrolled": "mx-3 navbar__link"} href="#about">About</a>
                <a className={hasScrolled ? "mx-3 navbar__link navbar__link--scrolled": "mx-3 navbar__link"} href="#features">Features</a>
                <a className={hasScrolled ? "mx-3 navbar__link navbar__link--scrolled": "mx-3 navbar__link"} href="#product-demo">Product Demo</a>
                <a className={hasScrolled ? "mx-3 navbar__link navbar__link--scrolled": "mx-3 navbar__link"} href="#team">The Team</a>
                <RemoteButton/>
            </div>
        </div>
    )
}