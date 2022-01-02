import React, { useState, useEffect, useContext, useRef } from 'react';
import RemoteButton from '../RemoteButton';
import { StaticImage } from "gatsby-plugin-image";
import useThrottle from '../../hooks/useThrottle';
import useBreakpoint from '../../hooks/useBreakpoint';
import { BreakpointContext } from '../../helpers/breakpointContext';
import './Navbar.scss';

export default function Navbar() {
    // scroll
    const [hasScrolled, setHasScrolled] = useState(false);
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

    // breakpoint
    const windowWidth = useBreakpoint();
    const breakpointTypes = useContext(BreakpointContext);
    const renderFullNav = windowWidth >= breakpointTypes.m;

    // navigation
    const mobileMenuToggleEle = useRef(null);
    const closeMobileMenu = () => {
        mobileMenuToggleEle.current.checked = false;
    }

    // templating
    const navbarHamburger = (
        <>
            <input type="checkbox" className="nav-btn__checkbox" id="navi-toggle" ref={mobileMenuToggleEle}/>
            <label htmlFor="navi-toggle" className="nav-btn__button">
                <span className={hasScrolled ? "nav-btn__icon nav-btn__icon--scrolled" : "nav-btn__icon"}>&nbsp;</span>
            </label>
            <div className="nav-btn__background">&nbsp;</div>
            <nav className="nav-btn__nav flex flex-col justify-between items-center">
                <div className="mt-6 text-center">
                    <StaticImage
                        src="../../assets/momo_icon.png"
                        alt="soar logo"
                        width={150}
                    />
                    <ul className="nav-btn__list">
                        <li className="m-5">
                            <a className="navbar__link--scrolled" onClick={closeMobileMenu} href="#about">About</a>
                        </li>
                        <li className="m-5">
                            <a className="navbar__link--scrolled" onClick={closeMobileMenu} href="#features">Features</a>
                        </li>
                        <li className="m-5">
                            <a className="navbar__link--scrolled" onClick={closeMobileMenu} href="#product-demo">Product Demo</a>
                        </li>
                        <li className="m-5">
                            <a className="navbar__link--scrolled" onClick={closeMobileMenu} href="#team">The Team</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center p-3 text-center">
                    <p className="text-secondary text-xs nav-btn__text">Presented to you by:</p>
                    <StaticImage
                        src="../../assets/soar_logo_black.png"
                        alt="soar logo"
                        width={150}
                    />
                    <p className="text-secondary text-xs nav-btn__text">SOAR (SUTD Organization of Autonomous Robotics)</p>
                </div>
             </nav>
        </>
    )
    const navbarFull = (
        <div className="navbar__right flex items-center mr-2">
            <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#about">About</a>
            <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#features">Features</a>
            <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#product-demo">Product Demo</a>
            <a className={hasScrolled ? "mx-4 navbar__link navbar__link--scrolled": "mx-4 navbar__link"} href="#team">The Team</a>
            <span className="mr-3"></span>
            <RemoteButton/>
        </div>
    )

    return (
        <div className={hasScrolled ? 'navbar navbar--scrolled flex justify-between items-center py-1 pl-3 pr-5' : 'navbar flex justify-between items-center py-1 pl-3 pr-5'}>
            <div className="navbar__left">
                <a href="#">
                    <StaticImage
                        src="../../assets/soar_logo_white.png"
                        alt="soar logo"
                        width={100}
                        className={hasScrolled ? 'navbar__image navbar__image--scrolled': 'navbar__image'}
                    />
                </a>
            </div>
            {renderFullNav ? navbarFull : navbarHamburger}
        </div>
    )
}